package com.mobile.utils;

public class Constant {

    /*success*/
    public static final int Success = 200;
    /*Bad Request*/
    public static final int BadRequest = 400;
    /*用户未注册*/
    public static final int USER_NOT_EXIT = 1010;
    /*用户账号或者密码错误*/
    public static final int ERROR_USER_PASSWORD = 1012;

    /*拦截器配置*/
    public static final String[] NoFilter_Pages = new String[]{
            "/index.do",
            "/login.do",
            "/logout.do",
            "/regist.do"
    };
}
