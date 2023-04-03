package xyz.erupt.flow.process.engine;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;
import xyz.erupt.core.exception.EruptApiErrorTip;
import xyz.erupt.flow.bean.entity.OaProcessActivityHistory;
import xyz.erupt.flow.bean.entity.OaProcessExecution;
import xyz.erupt.flow.bean.entity.OaProcessInstance;
import xyz.erupt.flow.bean.entity.OaTask;
import xyz.erupt.flow.bean.entity.node.OaProcessNode;
import xyz.erupt.flow.bean.entity.node.OaProcessNodeCondition;
import xyz.erupt.flow.bean.entity.node.OaProcessNodeGroup;
import xyz.erupt.flow.bean.entity.node.OaProcessNodeRefuse;
import xyz.erupt.flow.constant.FlowConstant;
import xyz.erupt.flow.service.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Component
@Slf4j
public class ProcessHelper {

    @Lazy
    @Autowired
    private ProcessActivityHistoryService processActivityHistoryService;
    @Lazy
    @Autowired
    private ProcessInstanceService processInstanceService;
    @Lazy
    @Autowired
    private ProcessActivityService processActivityService;
    @Lazy
    @Autowired
    private ProcessExecutionService processExecutionService;
    @Lazy
    @Autowired
    private TaskService taskService;

    /**
     * 跳转到指定活动
     * @param source
     * @param target
     */
    public void jumpTo(OaTask task, String source, String target) {
        if(source.equals(target)) {
            throw new EruptApiErrorTip("禁止跳转到当前节点");
        }
        //跳转之前，要先确定是本线程跳转还是跨线程跳转
        OaProcessInstance inst = processInstanceService.getById(task.getProcessInstId());
        OaProcessNode nextNode = this.findByKey(inst.getProcessNode(), target);
        boolean inOneExecution = this.isSameExecution(inst.getProcessNode(), source, target);
        //本线程内的跳转，只需要将本线程内的所有活动全部终止
        if(inOneExecution) {
            //这两个强行删除，不触发事件
            processActivityService.stopByExecutionId(task.getExecutionId(), "节点跳转");
            taskService.stopByExecutionId(task.getExecutionId(), "节点跳转");
            OaProcessExecution execution = processExecutionService.getById(task.getExecutionId());
            //当前线程下，继续进行
            processActivityService.newActivities(execution, JSON.parseObject(inst.getFormItems()), nextNode);
        }
        //跨线程跳转，要将本实例所有线程全部终止
        else {
            //这样有问题暂时先不支持跨线程跳转
            throw new EruptApiErrorTip("暂不支持跨线程跳转");
//            processExecutionService.stopByInstId(task.getProcessInstId(), "节点跳转");
//            processActivityService.stopByInstId(task.getProcessInstId(), "节点跳转");
//            taskService.stopByInstId(task.getProcessInstId(), "节点跳转");
            //然后启动新线程执行
        }
    }

    private OaProcessNode findByKey(OaProcessNode processNode, String target) {
        if(processNode==null || processNode.getId()==null) {
            return null;
        }
        if(processNode.getId()==target) {
            return processNode;
        }
        //先遍历分支
        if(processNode.getBranchs()!=null) {
            for (OaProcessNode branch : processNode.getBranchs()) {
                OaProcessNode tmpNode = this.findByKey(branch, target);
                if(tmpNode!=null) {
                    return tmpNode;
                }
            }
        }
        //再向前
        return this.findByKey(processNode.getChildren(), target);
    }

    private boolean isSameExecution(OaProcessNode processNode, String source, String target) {
        //首先找到第一个节点
        OaProcessNode firstNode = this.findFirst(processNode, source, target);
        if(firstNode==null) {
            throw new EruptApiErrorTip("跳转的节点不存在");
        }
        //然后以第一个节点出发寻找另一个节点（只招当前线程）
        OaProcessNode second = null;
        if(source.equals(firstNode)) {
            second = this.findByKey(firstNode, target);
        }else {
            second = this.findByKey(firstNode, source);
        }
        return second!=null;
    }

    private OaProcessNode findFirst(OaProcessNode processNode, String source, String target) {
        if(processNode==null || processNode.getId()==null) {
            return null;
        }
        if(processNode.getId()==source || processNode.getId()==target) {
            return processNode;
        }
        //先遍历分支
        if(processNode.getBranchs()!=null) {
            for (OaProcessNode branch : processNode.getBranchs()) {
                OaProcessNode tmpNode = this.findFirst(branch, source, target);
                if(tmpNode!=null) {
                    return tmpNode;
                }
            }
        }
        //再向前
        return this.findFirst(processNode.getChildren(), source, target);
    }

    /**
     * 获取流程的上一个用户任务
     * 只能从流程图上获取，而不能按照实际执行获取
     * @param activityKey
     * @return
     */
    public void getPreUserTasks(OaProcessNode currentNode, OaProcessNode lastUserTask, String activityKey, Set<OaProcessNode> preNodes) {
        if(FlowConstant.NODE_TYPE_ROOT.equals(currentNode.getType())
                || FlowConstant.NODE_TYPE_APPROVAL.equals(currentNode.getType())
        ) {//这几种情况要刷新最后的用户任务
            lastUserTask = currentNode;
        }

        List<OaProcessNode> branchs = currentNode.getBranchs();
        if(!CollectionUtils.isEmpty(branchs)) {//如果有分支，要先进分支
            for (OaProcessNode branch : branchs) {//否则遍历
                this.getPreUserTasks(branch, lastUserTask, activityKey, preNodes);
            }
        }else {
            if(currentNode.getChildren()==null) {//没有子节点，就到头了
                return;
            }else {//有子节点就继续
                //命中就返回
                if(activityKey.equals(currentNode.getChildren().getId())) {
                    preNodes.add(lastUserTask);
                }else {//不命中，继续向下
                    this.getPreUserTasks(currentNode.getChildren(), lastUserTask, activityKey, preNodes);
                }
            }
        }
    }

    /**
     * 根据条件选择一个分支继续
     * @param formContent
     * @param nodes
     * @return
     */
    public OaProcessNode switchNode(JSONObject formContent, List<OaProcessNode> nodes) {
        //按照顺序判断是否满足条件
        for (OaProcessNode node : nodes) {
            try {
                if(checkForGroups(formContent, node.getProps().getGroups(), node.getProps().getGroupsType())) {
                    return node;
                }
            }catch (Exception e) {
                log.debug("判断条件出错：" + e.getMessage());
                break;
            }
        }
        //如果都不满足，默认走第一条
        return nodes.get(0);
    }

    /**
     * 判断条件组
     * @param groups
     * @param groupsType
     * @return
     */
    private boolean checkForGroups(JSONObject form, List<OaProcessNodeGroup> groups, String groupsType) {
        if("OR".equals(groupsType)) {
            for (OaProcessNodeGroup group : groups) {
                if(checkForConditions(form, group.getConditions(), group.getGroupType())) {
                    return true;//任何一个条件满足即可
                }
            }
            return false;
        }else {//必须满足所有条件
            for (OaProcessNodeGroup group : groups) {
                if(!checkForConditions(form, group.getConditions(), group.getGroupType())) {
                    return false;//任何一个不满足就返回false
                }
            }
            return true;
        }
    }

    private boolean checkForConditions(JSONObject form, List<OaProcessNodeCondition> conditions, String groupType) {
        if("OR".equals(groupType)) {//任何一个条件满足即可
            for (OaProcessNodeCondition condition : conditions) {
                if(checkForCondition(form, condition)) {
                    return true;
                }
            }
            return false;
        }else {//必须满足所有条件
            for (OaProcessNodeCondition condition : conditions) {
                if(!checkForCondition(form, condition)) {
                    return false;
                }
            }
            return true;
        }
    }

    private boolean checkForCondition(JSONObject form, OaProcessNodeCondition condition) {
        String[] value = condition.getValue();//对照值
        if(value==null || value.length<=0) {
            throw new RuntimeException("条件没有对照值");
        }
        if("Number".equals(condition.getValueType())) {//数值类型
            Double formValue = form.getDouble(condition.getId());//表单值
            if(formValue==null) {//不能报错，因为可能是测试走流程
                throw new RuntimeException("分支条件不能为空");
            }
            if("=".equals(condition.getCompare())) {
                return formValue.compareTo(Double.valueOf(value[0]))==0;
            }else if(">".equals(condition.getCompare())) {
                return formValue.compareTo(Double.valueOf(value[0]))>0;
            }else if("<".equals(condition.getCompare())) {
                return formValue.compareTo(Double.valueOf(value[0]))<0;
            }else if(">=".equals(condition.getCompare())) {
                return formValue.compareTo(Double.valueOf(value[0]))>=0;
            }else if("<=".equals(condition.getCompare())) {
                return formValue.compareTo(Double.valueOf(value[0]))<=0;
            }else if("IN".equals(condition.getCompare())) {//等于任意一个
                for (String s : value) {
                    if(formValue.compareTo(Double.valueOf(s))==0) {
                        return true;
                    }
                }
                return false;
            }else {
                if(value==null || value.length!=2) {
                    throw new RuntimeException("必须有2个对照值");
                }
                if("B".equals(condition.getCompare())) {//x < 值 < x，左右都是开区间
                    return formValue.compareTo(Double.valueOf(value[0]))>0 && formValue.compareTo(Double.valueOf(value[1]))<0;
                }else if("'AB'".equals(condition.getCompare())) {//x ≤ 值 < x，左闭右开
                    return formValue.compareTo(Double.valueOf(value[0]))>=0 && formValue.compareTo(Double.valueOf(value[1]))<0;
                }else if("'BA'".equals(condition.getCompare())) {//x < 值 ≤ x，左开右闭
                    return formValue.compareTo(Double.valueOf(value[0]))>0 && formValue.compareTo(Double.valueOf(value[1]))<=0;
                }else if("'ABA'".equals(condition.getCompare())) {//x ≤ 值 ≤ x，左右都是闭区间
                    return formValue.compareTo(Double.valueOf(value[0]))>=0 && formValue.compareTo(Double.valueOf(value[1]))<=0;
                }
            }
        }else {
            throw new RuntimeException("不支持此类条件判断"+condition.getValueType());
        }
        return false;
    }

    /**
     * 审批拒绝
     */
    public void refuse(OaTask task, String accountName) {
        //取得拒绝策略
        OaProcessActivityHistory activityHistory = processActivityHistoryService.getById(task.getActivityId());
        OaProcessNode processNode = activityHistory.getProcessNode();
        OaProcessNodeRefuse refuse = processNode.getProps().getRefuse();
        if(FlowConstant.REFUSE_TO_END.equals(refuse.getType())) {//流程的终止
            processInstanceService.stop(activityHistory.getProcessInstId(), accountName+" 审批拒绝");
        }else if(FlowConstant.REFUSE_TO_BEFORE.equals(refuse.getType())) {//回到上一步
            //获取本线程的上一步
            OaProcessInstance inst = processInstanceService.getById(task.getProcessInstId());
            Set<OaProcessNode> preNodes = new HashSet<>();
            this.getPreUserTasks(inst.getProcessNode(), null, activityHistory.getActivityKey(), preNodes);
            if(preNodes==null || preNodes.size()<=0) {
                throw new EruptApiErrorTip("流程没有上一步");
            }else if(preNodes.size()>1) {
                throw new EruptApiErrorTip("流程的前置节点不唯一，无法回退");
            }
            //将本流程实例跳转到指定步骤
            this.jumpTo(task, task.getActivityKey(), preNodes.stream().findAny().get().getId());
        }else if(FlowConstant.REFUSE_TO_NODE.equals(refuse.getType())) {
            this.jumpTo(task, task.getActivityKey(), refuse.getTarget());
        }else {
            throw new EruptApiErrorTip("无法识别拒绝策略"+refuse.getType());
        }
    }
}
