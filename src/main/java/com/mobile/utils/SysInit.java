package com.mobile.utils;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

/**
 * @Created by xzm on 2019/11/5.
 * @Describe：jsp title 通用设置
 * @Review by：
 * @Modify by：
 * @Version : $ v_1.0 on 2019/11/5
 * @Remark:
 */
public class SysInit implements ServletContextListener {

    @Override
    public void contextInitialized(ServletContextEvent servletContextEvent) {
        ServletContext application  = servletContextEvent.getServletContext();
        application.setAttribute("sysname", application.getInitParameter("sysname"));
    }

    @Override
    public void contextDestroyed(ServletContextEvent servletContextEvent) {

    }
}
