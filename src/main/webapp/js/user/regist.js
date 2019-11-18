/**
 * @Created by xzm on 2019/11/18.
 * @Describe：注册
 * @Review by：
 * @Modify by：
 * @Version : $ v_1.0 on 2019/11/18
 * @Remark:
 */
import httpRequest from '../utils/HttpUtil.js';
import Tools from '../utils/common.js';

$(document).ready(function () {
    $("input[name = register]").click(function () {
        register();
    });
    $("input[name = reset]").click(function () {
        $("input[name = uname]").val("");
        $("input[name = password]").val("");
        $("input[name = password_]").val("");
        $("#p_uname").html("");
        $("#p_password").html("");
        $("#p_password_").html("");
    });
});

/**
 * 数据校验
 * @returns {*}
 */
function checkData() {
    var uname = $("input[name = uname]");
    var password = $("input[name = password]");
    var password_ = $("input[name = password_]");
    $("#p_uname").html("");
    $("#p_password").html("");
    $("#p_password_").html("");
    if (Tools.trim(uname.val()).length == 0) {
        $("#p_uname").html("请输入账号！");
        $("input[name = uname]").focus();
        return false;
    } else if (Tools.trim(password.val()).length == 0) {
        $("#p_password").html("请输入密码！");
        $("input[name = password]").focus()
        return false;
    } else if (Tools.trim(password_.val()).length == 0) {
        $("#p_password_").html("请输入确认密码！");
        $("input[name = password_]").focus();
        return false;
    } else if (!Tools.equals(password.val(), password_.val())) {
        $("#p_password_").html("两次密码输入不正确！");
        $("input[name = password_]").focus();
        return false;
    }
    return {uname: Tools.trim(uname.val()), password: Tools.trim(password.val())}
}

/**注册*/
function register() {
    let parames = checkData();
    if (parames) {
        httpRequest.request({
            method: "post",
            url: "/user/register",
            data: parames,
            success: function (response) {
                if (200 == response.code) {
                    Tools.setLocalStorage(parames.uname, response.data);
                    httpRequest.jumpToOther("/user/toIndex")
                }
            },
            error: function (error) {
                console.log("error:::: " + error);
            }
        });
    }
};
