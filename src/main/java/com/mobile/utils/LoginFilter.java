package com.mobile.utils;

import com.alibaba.druid.util.StringUtils;
import org.apache.log4j.Logger;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

/**
 * @Created by xzm on 2019/11/5.
 * @Describe：添加过滤器
 * @Review by：
 * @Modify by：
 * @Version : $ v_1.0 on 2019/11/5
 * @Remark:
 */
public class LoginFilter implements Filter {

    Logger logger = Logger.getLogger(LoginFilter.class);
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;
        HttpSession session = request.getSession();
        String url = request.getRequestURI();
        String admin = (String) session.getAttribute("admin");
        logger.info(request.toString());
        //创建类Constants.java，里面写的是无需过滤的页面
        for (int i = 0; i < Constant.NoFilter_Pages.length; i++) {
            if (url.indexOf(Constant.NoFilter_Pages[i]) > -1) {
                filterChain.doFilter(servletRequest, servletResponse);
                return;
            }
        }
    }

    @Override
    public void destroy() {

    }
}
