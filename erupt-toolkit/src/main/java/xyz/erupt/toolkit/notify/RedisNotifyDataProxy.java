package xyz.erupt.toolkit.notify;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Component;
import xyz.erupt.annotation.fun.DataProxy;
import xyz.erupt.core.config.GsonFactory;
import xyz.erupt.core.exception.EruptWebApiRuntimeException;
import xyz.erupt.core.invoke.DataProxyContext;

/**
 * @author YuePeng
 * date 2024/6/29 18:22
 */
@Component
public class RedisNotifyDataProxy implements DataProxy<Object> {

    @Autowired(required = false)
    private StringRedisTemplate stringRedisTemplate;

    @Override
    public void afterAdd(Object o) {
        this.publish(DataAction.ADD, o);
    }


    @Override
    public void afterUpdate(Object o) {
        this.publish(DataAction.UPDATE, o);
    }

    @Override
    public void afterDelete(Object o) {
        this.publish(DataAction.DELETE, o);
    }

    private void publish(DataAction action, Object data) {
        if (null == stringRedisTemplate) {
            throw new EruptWebApiRuntimeException("redis configuration not found");
        }
        if (null == DataProxyContext.params()[0]) {
            throw new EruptWebApiRuntimeException("DataProxy params[0] not found → redis channel");
        }
        stringRedisTemplate.convertAndSend(DataProxyContext.params()[0], GsonFactory.getGson().toJson(new NotifyData<>(action, data)));
    }

}
