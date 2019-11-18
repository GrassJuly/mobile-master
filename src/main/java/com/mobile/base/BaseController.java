package com.mobile.base;

/**
 * @Created by xzm on 2019/11/14.
 * @Describe：统一处理返回数据
 * @Review by：
 * @Modify by：
 * @Version : $ v_1.0 on 2019/11/14
 * @Remark:
 */
public abstract class BaseController {

    /**
     * @param status
     * @return
     */
    protected String retContent(int status) {
        return ResponseFormat.retParam(status);
    }

    /**
     * @param status
     * @param data
     * @return
     */
    protected String retContent(int status, Object data) {
        return ResponseFormat.retParam(status, data);
    }
}
