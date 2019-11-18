<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<%--
  Created by IntelliJ IDEA.
  User: zm
  Date: 2019/11/5
  Time: 16:00
  To change this template use File | Settings | File Templates.
--%>
<!DOCTYPE html>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>${sysname}</title>
    <link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/css/user/login.css"/>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-3.4.1.js"></script>
    <script type="module" src="${pageContext.request.contextPath}/js/user/login.js"></script>
</head>
<body>
<div id="div_content"  class='div_content'>
    <div class="div_login">
        <p class="title">用户登陆</p>
        <span id="span_toast" class="_span">请输入密码</span>
        <input name="account" type="text" class="_input mt_20" placeholder="请输入用户名"/>
        <input name="password" type="password" class="_input mt_20" placeholder="请输入密码" maxlength="6"/>
        <p id="p_forget" class="p_forget">忘记密码？</p>
        <input id="inp_login" type="button" value="立即登录" class="btn_login mt_20"/>
        <input id="inp_regect" type="button" value="注册" class="btn_login mt_20"/>
    </div>
</div>

</body>
</html>