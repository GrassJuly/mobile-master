/**
 * @Created by xzm on 2019/11/15.
 * @Describe：登陆
 * @Review by：
 * @Modify by：
 * @Version : $ v_1.0 on 2019/11/15
 * @Remark:
 */
import httpRequest from '../utils/HttpUtil.js'

var path = httpRequest.getRootPath();
$(document).ready(function () {
    //登陆按钮变色
    $("#inp_login").mouseover(function () {
        this.background = '#106BAB';
    }).mouseout(function () {
        this.background = 'red';
    }).click(function () {
        login();
    });
    showHideView()
})

/*控件添加交互*/
function showHideView() {
    $("input[name = account], input[name = password]").click(function () {
        $("#p_forget").css("display", "none");
    }).focus(function () {
        $("#p_forget").css("display", "none");
    });
}

/*登陆*/
function login() {
    var account = $("input[name = account]");
    if (account.val().trim().length == 0) {
        $("#span_toast").html("请输入账号");
        $("#span_toast").css("display", "inline")
        account.focus();
        return;
    } else {
        $("#span_toast").css("display", "none")
    }
    var password = $("input[name = password]");
    if (password.val().trim().length == 0) {
        $("#span_toast").html("请输入密码");
        $("#span_toast").css("display", "inline")
        password.focus();
        return;
    } else {
        $("#span_toast").css("display", "none")
    }
    httpRequest.request({
        method: "post",
        url: "/user/login",
        data: {uname: account.val(), password: password.val()},
        success: function (response) {
            if (200 == response.code) {
                httpRequest.jumpToOther("/user/toIndex");
            } else if (1010 == response.code) {
                alert("用户尚未注册")
                httpRequest.jumpToOther("/user/toRegister");
            } else {
                $("#span_toast").html(msg);
                $("#span_toast").css("display", "inline")
            }
        }
    })
}













