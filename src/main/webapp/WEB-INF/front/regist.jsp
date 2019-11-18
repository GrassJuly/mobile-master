<%--
  Created by IntelliJ IDEA.
  User: zm
  Date: 2019/11/5
  Time: 16:00
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<html>
<head>
    <title>${sysname}</title>
    <link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/css/user/regist.css"/>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-3.4.1.js"></script>
    <script type="module" src="${pageContext.request.contextPath}/js/user/regist.js"></script>
</head>
<body>
<div class="div_content">
    <div class="div_form">
        <h2 class="h_title">新用户注册</h2>
        <form onsubmit="return false">
            <table class="table_">
                <tr class="tr_">
                    <td><input type="text" class="input_" name="uname" placeholder="请输入姓名"></td>
                </tr>
                <tr class="tr_">
                    <td>
                        <p id="p_uname" style="height: 20px;font-size: 12px; color:red;"></p>
                        <input type="password" class="input_" name="password" placeholder="请输入密码" maxlength="6">
                    </td>
                </tr>
                <tr class="tr_">
                    <td>
                        <p id="p_password" style="height: 20px;font-size: 12px; color:red;"></p>
                        <input type="password" class="input_" name="password_" placeholder="请输入确认密码" maxlength="6">
                        <p id="p_password_" style="height: 20px;font-size: 12px; color:red;"></p>
                    </td>
                </tr>
            </table>
            <input type="button" name="register" value="注册" class="input_submit">
            <input type="button" name="reset" value="重置" class="input_reset">
        </form>
    </div>
</div>
</body>
</html>