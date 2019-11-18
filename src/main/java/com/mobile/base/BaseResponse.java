package com.mobile.base;


import com.alibaba.fastjson.JSON;

/**
 * @Created by xzm on 2019/11/13.
 * @Describe：统一返回数据约束,状态码、信息及响应数据
 * @Review by：
 * @Modify by：
 * @Version : $ v_1.0 on 2019/11/13
 * @Remark:
 */
public class BaseResponse {
    private static final long serialVersionUID = 1L;

    /*响应状态码*/
    private int code;
    /*响应提示信息*/
    private String message;
    /*返回业务数据*/
    private Object data;

    public BaseResponse(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public BaseResponse(int code, String message, Object data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    @Override
    public String toString() {
        if (null == data) {
            setData(new Object());
        }
        return JSON.toJSONString(this);
    }
}
