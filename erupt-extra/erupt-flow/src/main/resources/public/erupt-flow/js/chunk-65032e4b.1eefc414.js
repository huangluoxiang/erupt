(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65032e4b","chunk-6aafcabc"],{"0bd4":function(t,e,n){"use strict";var a=n("1e2e"),i=n.n(a);i.a},"1e2e":function(t,e,n){},2839:function(t,e,n){},"2b36":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-form",{ref:"form",staticClass:"process-form",attrs:{"label-position":"top",rules:t.rules,model:t._value}},t._l(t.forms,(function(e,a){return"SpanLayout"!==e.name&&"Description"!==e.name?n("el-form-item",{key:e.name+a,attrs:{prop:e.id,label:e.title}},[n("form-design-render",{ref:"sub-item_"+e.id,refInFor:!0,attrs:{mode:t.mode,formDisable:t.formDisable,config:e},on:{change:t.change},model:{value:t._value[e.id],callback:function(n){t.$set(t._value,e.id,n)},expression:"_value[item.id]"}})],1):n("form-design-render",{ref:"span-layout",attrs:{mode:t.mode,formDisable:t.formDisable,config:e},model:{value:t._value,callback:function(e){t._value=e},expression:"_value"}})})),1)},i=[],o=(n("4160"),n("b0c0"),n("159b"),n("d16b")),s={name:"FormRender",components:{FormDesignRender:o["a"]},props:{forms:{type:Array,default:function(){return[]}},value:{type:Object,default:function(){return{}}},mode:{type:String,default:"PC"},formDisable:{type:Boolean,default:!1}},data:function(){return{rules:{}}},created:function(){this.loadFormConfig(this.forms)},computed:{_value:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},watch:{},methods:{validate:function(t){var e=this,n=!0;this.$refs.form.validate((function(a){if(n=a,a)for(var i=0;i<e.forms.length;i++)if("TableList"===e.forms[i].name){var o=e.$refs["sub-item_".concat(e.forms[i].id)];if(o&&Array.isArray(o)&&o.length>0&&(o[0].validate((function(t){n=t})),!n))break}t(n)}))},loadFormConfig:function(t){var e=this;t.forEach((function(t){"SpanLayout"===t.name?e.loadFormConfig(t.props.items):(e.$set(e._value,t.id,e.value[t.id]),t.props.required&&e.$set(e.rules,t.id,[{type:"Array"===t.valueType?"array":void 0,required:!0,message:"请填写".concat(t.title),trigger:"blur"}]))}))},change:function(t,e){this.$emit("change",t,e)}}},r=s,l=(n("bbda"),n("2877")),c=Object(l["a"])(r,a,i,!1,null,"8246d984",null);e["a"]=c.exports},"3e36":function(t,e,n){"use strict";var a=n("f2ba"),i=n.n(a);i.a},4773:function(t,e,n){"use strict";var a=n("d7bf"),i=n.n(a);i.a},"4e02":function(t,e,n){"use strict";n.d(e,"e",(function(){return i})),n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return s})),n.d(e,"h",(function(){return r})),n.d(e,"b",(function(){return l})),n.d(e,"m",(function(){return c})),n.d(e,"j",(function(){return u})),n.d(e,"k",(function(){return d})),n.d(e,"a",(function(){return f})),n.d(e,"d",(function(){return m})),n.d(e,"l",(function(){return p})),n.d(e,"i",(function(){return h})),n.d(e,"c",(function(){return g}));var a=n("0c6d");function i(t){return Object(a["a"])({url:"../erupt-api/erupt-flow/admin/form/group",method:"get",params:t})}function o(t){return Object(a["a"])({url:"../erupt-api/erupt-flow/process/groups",method:"get",params:t})}function s(t){return Object(a["a"])({url:"../erupt-api/erupt-flow/admin/form/sort",method:"put",data:t})}function r(t){return Object(a["a"])({url:"../erupt-api/erupt-flow/admin/form/group/sort",method:"put",data:t})}function l(t){return Object(a["a"])({url:"../erupt-api/erupt-flow/admin/form/group",method:"post",params:{groupName:t}})}function c(t,e){return Object(a["a"])({url:"../erupt-api/erupt-flow/admin/form/group/"+t,method:"put",data:e})}function u(t){return Object(a["a"])({url:"../erupt-api/erupt-flow/admin/form/group/"+t,method:"delete"})}function d(t,e){return Object(a["a"])({url:"../erupt-api/erupt-flow/admin/form/"+t,method:"put",data:e})}function f(t){return Object(a["a"])({url:"../erupt-api/erupt-flow/admin/form",method:"post",data:t})}function m(t){return Object(a["a"])({url:"../erupt-api/erupt-flow/admin/form/detail/"+t,method:"get"})}function p(t){return Object(a["a"])({url:"../erupt-api/erupt-flow/admin/form/detail",method:"put",data:t})}function h(t){return Object(a["a"])({url:"../erupt-api/erupt-flow/admin/form/"+t.formId,method:"delete",data:t})}function g(){return Object(a["a"])({url:"../erupt-api/erupt-flow/forms",method:"get"})}},"644f":function(t,e,n){"use strict";n.d(e,"g",(function(){return i})),n.d(e,"e",(function(){return o})),n.d(e,"a",(function(){return s})),n.d(e,"f",(function(){return r})),n.d(e,"i",(function(){return l})),n.d(e,"h",(function(){return c})),n.d(e,"d",(function(){return u})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return f}));var a=n("0c6d");function i(t,e){return Object(a["a"])({url:"../erupt-api/erupt-flow/process/start/form/"+t,method:"post",data:e})}function o(t){return Object(a["a"])({url:"../erupt-api/erupt-flow/task/mine",method:"get",params:t})}function s(t,e){return Object(a["a"])({url:"../erupt-api/erupt-flow/task/complete/"+t,method:"post",params:{remarks:e}})}function r(t,e){return Object(a["a"])({url:"../erupt-api/erupt-flow/task/refuse/"+t,method:"post",params:{remarks:e}})}function l(t,e){return Object(a["a"])({url:"../erupt-api/erupt-flow/process/timeline/preview/"+t,method:"post",data:e})}function c(t){return Object(a["a"])({url:"../erupt-api/erupt-flow/process/timeline/"+t,method:"post"})}function u(t){return Object(a["a"])({url:"../erupt-api/erupt-flow/task/detail/"+t,method:"get"})}function d(t){return Object(a["a"])({url:"../erupt-api/erupt-flow/inst/detail/"+t,method:"get"})}function f(t){return Object(a["a"])({url:"../erupt-api/erupt-flow/inst/mine/about",method:"get",params:t})}},9451:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-timeline",{staticStyle:{"margin-top":"10px"},attrs:{reverse:!1}},[t.activities.length<=0?n("div",{staticStyle:{"padding-left":"10px",color:"#909399"}},[n("p",[t._v("填写表单以预览时间线")]),n("el-skeleton",{staticStyle:{width:"480px"},attrs:{rows:6,animated:""}})],1):t._e(),t._l(t.activities,(function(e,a){return n("el-timeline-item",{key:e.activityKey,attrs:{type:t.timeLineType(e),size:"large",timestamp:e.createDate,placement:"top"}},[e.tasks?n("el-card",{attrs:{shadow:"never"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v(t._s(e.activityName))]),n("span",{staticStyle:{font:"12px Extra Small",color:"#909399","margin-left":"10px"}},[t._v(t._s(e.description||""))])]),n("div",t._l(e.tasks,(function(e){return n("div",{staticStyle:{display:"inline-block","margin-left":"10px"}},[n("div",{staticStyle:{display:"inline-block"}},[n("el-avatar",{staticStyle:{background:"#409EFF"}},[t._v(t._s(e.finishUser||e.taskOwner||e.assignee))])],1),n("div",{staticStyle:{display:"inline-block","min-height":"60px","vertical-align":"middle","margin-left":"10px"}},[n("div",[t._v(t._s(e.finishUserName||e.taskOwner||e.assignee||"候选人"))]),e.finishDate?n("div",{staticStyle:{color:"#67C23A","font-size":"14px","line-height":"20px"}},[t._v(t._s(e.finishDate))]):n("div",{staticStyle:{color:"#E6A23C","font-size":"14px","line-height":"20px"}},[t._v(t._s("审批中"))])])])})),0)]):t._e(),e.tasks?t._e():n("el-card",{attrs:{shadow:"never"}},[n("span",[t._v(t._s(e.activityName))]),n("span",{staticStyle:{font:"12px Extra Small",color:"#909399","margin-left":"10px"}},[t._v(t._s(e.description||""))])])],1)}))],2)},i=[],o=n("644f"),s={name:"TimeLine",components:{},props:{current:{default:"root"}},data:function(){return{loading:!1,activities:[]}},mounted:function(){},computed:{},methods:{getActivities:function(){return this.activities},timestamp:function(t){return t.activityKey===this.current?t.createDate:""},timeLineType:function(t){return t.activityKey===this.current?"warning":t.finishDate?"success":"primary"},fresh:function(t,e){var n=this;this.loading=!0,this.activities=[],Object(o["i"])(t,e).then((function(t){n.loading=!1,n.activities=t.data}))},freshForInst:function(t){var e=this;this.loading=!0,this.activities=[],Object(o["h"])(t).then((function(t){e.loading=!1,e.activities=t.data}))}}},r=s,l=(n("4773"),n("2877")),c=Object(l["a"])(r,a,i,!1,null,"c9df9cd4",null);e["a"]=c.exports},9555:function(t,e,n){"use strict";var a=n("9e54"),i=n.n(a);i.a},"9e54":function(t,e,n){},ab4f:function(t,e,n){},ad78:function(t,e,n){},b78d:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{padding:"10px 20px"}},[t.loading?t._e():n("div",[n("p",{staticStyle:{font:"14px Base",color:"#909399"}},[t._v(t._s(t.taskDetail.instCreatorName+" 发布于 "+t.taskDetail.instCreateDate))]),n("form-render",{ref:"form",staticClass:"process-form",attrs:{mode:"PC",formDisable:t.formDisable,forms:t.taskDetail.formItems},on:{input:t.valChange},model:{value:t.taskDetail.formData,callback:function(e){t.$set(t.taskDetail,"formData",e)},expression:"taskDetail.formData"}})],1),n("div",{staticStyle:{"padding-bottom":"10px"},on:{click:function(e){t.showTimeLine=!t.showTimeLine}}},[n("el-button",{staticStyle:{color:"#909399"},attrs:{type:"text",size:"medium"}},[t._v(" 审批流程 "),n("i",{class:{"el-icon-arrow-down":!t.showTimeLine,"el-icon-arrow-up":t.showTimeLine}})])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showTimeLine,expression:"showTimeLine"}]},[n("timeLine",{ref:"timeLine",attrs:{current:t.taskDetail.activityKey}})],1)])},i=[],o=(n("d3b7"),n("2b36")),s=n("d16b"),r=n("644f"),l=n("9451"),c=(n("3786"),{name:"InitiateProcess",components:{FormDesignRender:s["a"],FormRender:o["a"],TimeLine:l["a"]},props:{instId:{type:String,required:!1},taskId:{type:String,required:!1},mode:{type:String,default:"view"}},data:function(){return{myInstId:null,loading:!1,formDisable:!0,taskDetail:{formItems:[],formData:{}},showTimeLine:!1,count:0}},mounted:function(){this.loading=!0,this.formDisable=!0,this.myInstId=this.instId,this.taskId?this.loadByTaskId(this.taskId):this.myInstId&&this.loadByInstId(this.myInstId)},computed:{},methods:{loadByTaskId:function(t){var e=this;this.loading=!0,Object(r["d"])(t).then((function(t){e.loading=!1,e.taskDetail=t.data||{},e.myInstId=t.data.processInstId})).then((function(){e.$refs.timeLine.freshForInst(e.myInstId)})).finally((function(){return e.loading=!1}))},loadByInstId:function(t){var e=this;this.loading=!0,Object(r["b"])(t).then((function(t){e.loading=!1,e.taskDetail=t.data||{}})).then((function(){e.$refs.timeLine.freshForInst(e.myInstId)})).finally((function(){return e.loading=!1}))},validate:function(t){this.$refs.form.validate(t)},getFormData:function(){return this.taskDetail.formData},valChange:function(t){console.log(t)}}}),u=c,d=(n("3e36"),n("2877")),f=Object(d["a"])(u,a,i,!1,null,"73533884",null);e["default"]=f.exports},bbda:function(t,e,n){"use strict";var a=n("2839"),i=n.n(a);i.a},d16b:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.config.name,t._b({ref:"form",tag:"component",attrs:{mode:t.mode,formDisable:t.formDisable},on:{change:t.change},model:{value:t._value,callback:function(e){t._value=e},expression:"_value"}},"component",t.config.props,!1))},i=[],o=(n("d3b7"),function(){return n.e("chunk-afe908e4").then(n.bind(null,"b28d"))}),s=function(){return n.e("chunk-e0ccc8b4").then(n.bind(null,"cf45"))},r=function(){return n.e("chunk-3e355ae6").then(n.bind(null,"5cb6"))},l=function(){return n.e("chunk-ba34bacc").then(n.bind(null,"d158"))},c=function(){return n.e("chunk-6b705aef").then(n.bind(null,"0d29"))},u=function(){return n.e("chunk-6bc1e906").then(n.bind(null,"412b"))},d=function(){return n.e("chunk-6a2da2a0").then(n.bind(null,"f89a"))},f=function(){return n.e("chunk-18e37bf7").then(n.bind(null,"4f98"))},m=function(){return n.e("chunk-d6bb8d6c").then(n.bind(null,"77aa"))},p=function(){return n.e("chunk-44964610").then(n.bind(null,"db9e"))},h=function(){return n.e("chunk-9a343726").then(n.bind(null,"023d"))},g=function(){return n.e("chunk-2d0f04df").then(n.bind(null,"9c98"))},v=function(){return n.e("chunk-2d0e4c53").then(n.bind(null,"9248"))},b=function(){return n.e("chunk-491b5e0e").then(n.bind(null,"f13b"))},y=function(){return n.e("chunk-cb186ff8").then(n.bind(null,"86c3"))},x=function(){return n.e("chunk-d014f080").then(n.bind(null,"6ea6"))},k=function(){return n.e("chunk-2d0e9937").then(n.bind(null,"8db7"))},_=function(){return Promise.all([n.e("chunk-b27dd9ce"),n.e("chunk-b3a1d860"),n.e("chunk-37d95c04")]).then(n.bind(null,"918a"))},D=function(){return Promise.all([n.e("chunk-b27dd9ce"),n.e("chunk-3bcd2b64")]).then(n.bind(null,"7ca0"))},w={TextInput:o,NumberInput:s,AmountInput:r,TextareaInput:l,SelectInput:c,MultipleSelect:u,DateTime:d,DateTimeRange:f,UserPicker:y,DeptPicker:b,RolePicker:x,Description:m,FileUpload:h,ImageUpload:p,MoneyInput:v,Location:g,SignPanel:k,SpanLayout:_,TableList:D},I={name:"FormRender",components:w,props:{mode:{type:String,default:"DESIGN"},formDisable:{type:Boolean,default:!1},value:{default:void 0},config:{type:Object,default:function(){return{}}}},computed:{_value:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},data:function(){return{}},methods:{validate:function(t){this.$refs.form.validate(t)},change:function(t){this.$emit("change",this.config.id,t)}}},C=I,S=n("2877"),T=Object(S["a"])(C,a,i,!1,null,"615aa365",null);e["a"]=T.exports},d43f:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"workspace"},[n("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":t.changeTab},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"发起工单",name:"tab1"}},[n("el-row",{staticStyle:{"margin-bottom":"20px"}},[n("el-col",{attrs:{xs:12,sm:10,md:8,lg:6,xl:4}},[n("el-input",{attrs:{size:"medium",placeholder:"搜索表单",clearable:""},model:{value:t.formList.inputs,callback:function(e){t.$set(t.formList,"inputs",e)},expression:"formList.inputs"}},[n("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1)],1),n("el-collapse",{model:{value:t.actives,callback:function(e){t.actives=e},expression:"actives"}},t._l(t.formList.list,(function(e,a){return n("el-collapse-item",{directives:[{name:"show",rawName:"v-show",value:e.groupId>=0&&e.processDefs.length>0,expression:"group.groupId >= 0 && group.processDefs.length > 0"}],key:a,attrs:{title:e.groupName,name:e.groupName}},t._l(e.processDefs,(function(e,a){return n("div",{key:a,staticClass:"form-item",on:{click:function(n){return t.enterItem(e)}}},[n("i",{class:e.logo.icon,style:"background: "+e.logo.background}),n("div",[n("ellipsis",{attrs:{"hover-tip":"",content:e.formName}}),n("span",[t._v("发起审批")])],1)])})),0)})),1)],1),n("el-tab-pane",{attrs:{label:"待我处理("+(t.myTaskCount||0)+")",name:"tab2"}},[n("MyTask",{ref:"myTask",on:{afterLoad:t.setMyTaskCount}})],1),n("el-tab-pane",{attrs:{label:"我的工单",name:"tab3"}},[n("me-about",{ref:"meAbout"})],1)],1),n("el-dialog",{attrs:{title:t.formTitle,width:"800px",top:"20px",visible:t.openItemDl,"close-on-click-modal":!1},on:{"update:visible":function(e){t.openItemDl=e}}},[t.openItemDl?n("initiate-process",{ref:"processForm",attrs:{code:t.selectForm.id}}):t._e(),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.openItemDl=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("提 交")])],1)],1)],1)},i=[],o=(n("4160"),n("159b"),n("4e02")),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[t.loading?t._e():n("div",[n("form-render",{ref:"form",staticClass:"process-form",attrs:{forms:t.forms},on:{change:t.formChange},model:{value:t.formData,callback:function(e){t.formData=e},expression:"formData"}})],1),n("div",{staticStyle:{"padding-bottom":"10px"},on:{click:function(e){t.showTimeLine=!t.showTimeLine}}},[n("el-button",{staticStyle:{color:"#909399"},attrs:{type:"text",size:"medium"}},[t._v(" 审批流程 "),n("i",{class:{"el-icon-arrow-down":!t.showTimeLine,"el-icon-arrow-up":t.showTimeLine}})])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showTimeLine,expression:"showTimeLine"}]},[n("timeLine",{ref:"timeLine",attrs:{current:"root"}})],1)])},r=[],l=n("2b36"),c=n("d16b"),u=n("9451"),d={name:"InitiateProcess",components:{FormDesignRender:c["a"],FormRender:l["a"],TimeLine:u["a"]},props:{code:{type:String,required:!0}},data:function(){return{loading:!1,formData:{},showTimeLine:!1,form:{formId:"",formName:"",logo:{},formItems:[],process:{},remark:""}}},mounted:function(){this.loadFormInfo(this.code)},computed:{forms:function(){return this.$store.state.design.formItems}},watch:{},methods:{loadFormInfo:function(t){var e=this;this.loading=!0,Object(o["d"])(t).then((function(t){e.loading=!1;var n=t.data;n.logo=JSON.parse(n.logo),n.settings=JSON.parse(n.settings),n.formItems=JSON.parse(n.formItems),n.process=JSON.parse(n.process),e.form=n,e.$store.state.design=n})).catch((function(t){e.loading=!1,e.$message.error(t)}))},validate:function(t){this.$refs.form.validate(t)},formChange:function(t,e){var n=this;this.$nextTick((function(){(n.$refs.timeLine.getActivities().length<=0||n.isConditionField(t,n.form.process))&&n.$refs.timeLine.fresh(n.code,n.formData)}))},isConditionField:function(t,e){if("CONDITION"==e.type&&e.props.groups&&e.props.groups.length>0)for(var n in e.props.groups)for(var a in e.props.groups[n].conditions)if(e.props.groups[n].conditions[a].id===t)return!0;if(e.branchs&&e.branchs.length>0)for(var i in e.branchs)if(this.isConditionField(t,e.branchs[i]))return!0;return!(!e.children||!this.isConditionField(t,e.children))}}},f=d,m=(n("fa25"),n("2877")),p=Object(m["a"])(f,s,r,!1,null,"64a968ee",null),h=p.exports,g=n("644f"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"myTask"},[n("el-row",{staticStyle:{"margin-bottom":"20px"}},[n("el-col",{attrs:{xs:12,sm:10,md:8,lg:6,xl:4}},[n("el-input",{attrs:{size:"medium",placeholder:"搜索待我审批的工单",clearable:""},model:{value:t.queryParam.keywords,callback:function(e){t.$set(t.queryParam,"keywords",e)},expression:"queryParam.keywords"}})],1),n("el-col",{staticStyle:{"padding-left":"10px"},attrs:{xs:12,sm:10,md:8,lg:6,xl:4}},[n("el-button",{attrs:{icon:"el-icon-search",round:""},on:{click:t.reloadDatas}},[t._v("搜索")])],1)],1),n("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadDatas,expression:"loadDatas"}],staticClass:"infinite-list-wrapper taskPanel",attrs:{"infinite-scroll-disabled":"disabled"}},[t._l(t.dataList,(function(e,a){return n("li",[n("el-card",{staticClass:"taskCard",attrs:{shadow:"hover"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("el-link",{staticStyle:{font:"18px large"},attrs:{underline:!1},on:{click:function(n){return t.showDetail(e)}}},[t._v(t._s(e.taskName))]),n("span",{staticStyle:{font:"12px Extra Small",color:"#909399","padding-left":"20px"}},[t._v(" "+t._s(e.createDate))]),n("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(n){return t.showDetail(e)}}},[t._v("详情")])],1),n("div",{staticClass:"text item"},[n("el-row",[n("el-col",{attrs:{xs:6,sm:6,md:6,lg:6,xl:4}},[n("i",{staticClass:"el-icon-eleme ic avator",staticStyle:{background:"rgb(30, 144, 255)"}}),n("span",{staticClass:"taskCell",staticStyle:{color:"#909399"}},[t._v(t._s(e.formName))])]),n("el-col",{attrs:{xs:6,sm:6,md:6,lg:6,xl:4}},[n("span",{staticClass:"taskCell",staticStyle:{color:"#909399"}},[t._v(t._s(e.businessTitle))])]),n("el-col",{attrs:{xs:12,sm:12,md:12,lg:12,xl:8}},[n("span",{staticClass:"taskCell",staticStyle:{color:"#909399"}},[t._v(t._s(e.instCreatorName+" 发起于 "+e.instCreateDate))])])],1)],1)])],1)})),t.loading?n("div",{staticStyle:{"text-align":"center",color:"#C0C4CC",padding:"10px","min-width":"30px","min-height":"50px"}},[t._v("加载中...")]):t._e(),t.noMore?n("div",{staticStyle:{"text-align":"center",color:"#C0C4CC",padding:"10px","min-width":"30px","min-height":"50px"}},[t._v("没有更多了~")]):t._e()],2),n("el-dialog",{attrs:{title:t.selectInst.businessTitle,width:"800px",top:"20px",visible:t.openItemDl,"close-on-click-modal":!1},on:{"update:visible":function(e){t.openItemDl=e}}},[t.openItemDl?n("TaskDetail",{ref:"taskDetail",attrs:{"task-id":t.selectInst.id,mode:"audit"},on:{"update:taskId":function(e){return t.$set(t.selectInst,"id",e)},"update:task-id":function(e){return t.$set(t.selectInst,"id",e)}}}):t._e(),n("span",{staticClass:"dialog-footer",staticStyle:{"padding-right":"20px"},attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.openItemDl=!1}}},[t._v("关 闭")]),n("el-button",{attrs:{type:"danger"},on:{click:function(e){return t.refuse(t.selectInst.id)}}},[t._v("拒 绝")]),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.complete(t.selectInst.id)}}},[t._v("同 意")])],1)],1)],1)},b=[],y=(n("d81d"),n("d3b7"),n("b78d")),x={name:"MyTask",components:{TaskDetail:y["default"]},props:{},data:function(){return{selectInst:{},openItemDl:!1,loading:!1,queryParam:{keywords:"",pageSize:10,pageIndex:1},dataList:[],count:0,maxCount:0}},mounted:function(){this.reloadDatas()},computed:{noMore:function(){return this.count>=this.maxCount},disabled:function(){return this.loading||this.noMore}},methods:{reloadDatas:function(){this.reset(),this.loadDatas()},reset:function(){this.loading=!0,this.queryParam={pageSize:10,pageIndex:1},this.dataList=[],this.count=0,this.maxCount=0},loadDatas:function(){var t=this;this.loading=!0,Object(g["e"])(this.queryParam).then((function(e){t.loading=!1,e.data.list.map((function(e){t.dataList.push(e),t.count+=1})),t.queryParam.pageIndex++,t.maxCount=e.data.total,t.$emit("afterLoad",t.maxCount,t.dataList)})).finally((function(){t.loading=!1}))},showDetail:function(t){this.selectInst=t,this.openItemDl=!0},complete:function(t){var e=this;this.$prompt("","审批通过",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(n){Object(g["a"])(t,n.value).then((function(t){e.$message.success(t.message),e.openItemDl=!1,e.reloadDatas()}))}))},refuse:function(t){var e=this;this.$prompt("请输入拒绝意见","您正在驳回审批",{type:"warning",confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(n){Object(g["f"])(t,n.value).then((function(t){e.$message.success(t.message),e.openItemDl=!1,e.reloadDatas()}))}))}}},k=x,_=(n("e68c"),Object(m["a"])(k,v,b,!1,null,"4846c2ac",null)),D=_.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"meAbout"},[n("el-row",{staticStyle:{"margin-bottom":"20px"}},[n("el-col",{attrs:{xs:12,sm:10,md:8,lg:6,xl:4}},[n("el-input",{attrs:{size:"medium",placeholder:"搜索我发起的、我审批的、抄送我的工单",clearable:""},model:{value:t.queryParam.keywords,callback:function(e){t.$set(t.queryParam,"keywords",e)},expression:"queryParam.keywords"}})],1),n("el-col",{staticStyle:{"padding-left":"10px"},attrs:{xs:12,sm:10,md:8,lg:6,xl:4}},[n("el-button",{attrs:{icon:"el-icon-search",round:""},on:{click:t.reloadDatas}},[t._v("搜索")])],1)],1),n("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadDatas,expression:"loadDatas"}],staticClass:"infinite-list-wrapper taskPanel",attrs:{"infinite-scroll-disabled":"disabled"}},[t._l(t.dataList,(function(e){return n("li",[n("el-card",{staticClass:"taskCard",attrs:{shadow:"hover"}},[n("div",{staticClass:"clearfix",staticStyle:{"padding-left":"10px"},attrs:{slot:"header"},slot:"header"},[e.tag?n("div",{class:{angle_mark:!0,angle_mark_color1:"发起"===e.tag,angle_mark_color2:"审批"===e.tag,angle_mark_color3:"抄送"===e.tag}},[n("span",[t._v(t._s(e.tag))])]):t._e(),n("el-row",[n("el-col",{attrs:{xs:20,sm:8,md:8,lg:6,xl:4}},[n("el-link",{staticStyle:{font:"18px large"},attrs:{underline:!1},on:{click:function(n){return t.showDetail(e)}}},[t._v(t._s(e.businessTitle))])],1),n("el-col",{attrs:{xs:4,sm:8,md:8,lg:6,xl:8}},[n("el-tag",{staticStyle:{"margin-left":"10px"},attrs:{type:t.getStatus(e).type}},[t._v(" "+t._s(t.getStatus(e).text)+" ")]),"FINISHED"===e.status||"SHUTDOWN"===e.status?n("span",{staticStyle:{color:"#909399"}},[t._v(" "+t._s("结束于 "+e.finishDate)+" ")]):t._e()],1),n("el-col",{attrs:{xs:0,sm:8,md:8,lg:12,xl:12}},[n("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(n){return t.showDetail(e)}}},[t._v("详情")])],1)],1)],1),n("div",{staticClass:"text item",staticStyle:{"padding-left":"10px"}},[n("el-row",[n("el-col",{attrs:{xs:6,sm:6,md:6,lg:6,xl:4}},[n("i",{staticClass:"el-icon-eleme ic avator"}),n("span",{staticClass:"taskCell",staticStyle:{color:"#909399"}},[t._v(t._s(e.formName))])]),n("el-col",{attrs:{xs:18,sm:18,md:18,lg:18,xl:20}},[n("span",{staticClass:"taskCell",staticStyle:{color:"#909399"}},[t._v(t._s(e.creatorName+" 发起于 "+e.createDate))])])],1)],1)])],1)})),t.loading?n("div",{staticStyle:{"text-align":"center",color:"#C0C4CC",padding:"10px","min-width":"30px","min-height":"50px"}},[t._v("加载中...")]):t._e(),t.noMore?n("div",{staticStyle:{"text-align":"center",color:"#C0C4CC",padding:"10px","min-width":"30px","min-height":"50px"}},[t._v("没有更多了~")]):t._e()],2),n("el-dialog",{attrs:{title:t.selectInst.businessTitle,width:"800px",top:"20px",visible:t.openItemDl,"close-on-click-modal":!1},on:{"update:visible":function(e){t.openItemDl=e}}},[t.openItemDl?n("TaskDetail",{ref:"taskDetail",attrs:{"inst-id":t.selectInst.id},on:{"update:instId":function(e){return t.$set(t.selectInst,"id",e)},"update:inst-id":function(e){return t.$set(t.selectInst,"id",e)}}}):t._e(),n("span",{staticClass:"dialog-footer",staticStyle:{"padding-right":"20px"},attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.openItemDl=!1}}},[t._v("关 闭")])],1)],1)],1)},I=[],C={name:"MeAbout",components:{TaskDetail:y["default"]},props:{},data:function(){return{selectInst:{},openItemDl:!1,loading:!1,queryParam:{keywords:"",pageSize:10,pageIndex:1},dataList:[],count:0,maxCount:0}},mounted:function(){this.reloadDatas()},computed:{noMore:function(){return this.count>=this.maxCount},disabled:function(){return this.loading||this.noMore}},methods:{reloadDatas:function(){this.reset(),this.loadDatas()},getStatus:function(t){return"RUNNING"===t.status?{text:"审批中",type:"primary"}:"PAUSE"===t.status?{text:"暂停",type:"warning"}:"FINISHED"===t.status?{text:"已完成",type:"success"}:"SHUTDOWN"===t.status?{text:"已拒绝",type:"danger"}:void 0},reset:function(){this.loading=!0,this.queryParam={pageSize:10,pageIndex:1},this.dataList=[],this.count=0,this.maxCount=0},loadDatas:function(){var t=this;this.loading=!0,Object(g["c"])(this.queryParam).then((function(e){t.loading=!1,e.data.list.map((function(e){t.dataList.push(e),t.count+=1})),t.queryParam.pageIndex++,t.maxCount=e.data.total,t.$emit("afterLoad",t.maxCount,t.dataList)})).finally((function(){t.loading=!1}))},showDetail:function(t){this.selectInst=t,this.openItemDl=!0}}},S=C,T=(n("0bd4"),Object(m["a"])(S,w,I,!1,null,"35c5e4cc",null)),L=T.exports,O={name:"workSpace",components:{InitiateProcess:h,MyTask:D,MeAbout:L},data:function(){return{dataList:[],loading:!1,openItemDl:!1,formTitle:"",activeName:"tab1",selectForm:{},formItem:{},actives:[],formList:{list:[],inputs:"",searchResult:[]},pending:{list:[]},myTaskCount:0}},mounted:function(){this.getGroups()},methods:{getGroups:function(){var t=this;Object(o["f"])({keywords:this.formList.inputs}).then((function(e){t.formList.list=e.data,t.formList.list.forEach((function(e){t.actives.push(e.groupName),e.processDefs.forEach((function(t){t.logo=JSON.parse(t.logo)}))})),t.groups=e.data}))},enterItem:function(t){this.formTitle=t.formName,this.selectForm=t,this.openItemDl=!0},submitForm:function(){var t=this;this.$refs.processForm.validate((function(e){e?Object(g["g"])(t.selectForm.id,t.$refs.processForm.formData).then((function(e){t.$message.success(e.message),t.openItemDl=!1,t.$refs.myTask.reloadDatas(),t.$refs.meAbout.reloadDatas()})):t.$message.warning("请完善表单😥")}))},setMyTaskCount:function(t){this.myTaskCount=t},changeTab:function(t){return this.$refs.myTask.reloadDatas(),this.$refs.meAbout.reloadDatas(),!0}}},$=O,N=(n("9555"),Object(m["a"])($,a,i,!1,null,"73146daa",null));e["default"]=N.exports},d7bf:function(t,e,n){},d81d:function(t,e,n){"use strict";var a=n("23e7"),i=n("b727").map,o=n("1dde"),s=n("ae40"),r=o("map"),l=s("map");a({target:"Array",proto:!0,forced:!r||!l},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},e68c:function(t,e,n){"use strict";var a=n("ad78"),i=n.n(a);i.a},f2ba:function(t,e,n){},fa25:function(t,e,n){"use strict";var a=n("ab4f"),i=n.n(a);i.a}}]);
//# sourceMappingURL=chunk-65032e4b.1eefc414.js.map