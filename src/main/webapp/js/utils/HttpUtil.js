/**
 * @Created by xzm on 2019/11/15.
 * @Describe：网络请求工具类
 * @Review by：
 * @Modify by：
 * @Version : $ v_1.0 on 2019/11/15
 * @Remark:
 */

import {host} from './config.js';

const httpRequest = {
    //网络请求功能
    request: function (param) {
        var _this = this;
        const url = param.url;
        $.ajax({
            type: param.method || 'get',
            url: _this.getServerUrl(url),
            dataType: param.type || 'json',
            data: param.data || '',
            success: function (res) {
                //容错处理
                if (200 === res.code || 1010 === res.code) {
                    typeof param.success === 'function' && param.success(res);
                } else {
                    typeof param.error === 'function' && param.error(res.message);
                }
            },
            error: function (err) {
                // typeof param.error === 'function' && param.error(err);
            }
        });
    },
    /**
     * 获取服务器地址
     * @param path
     * @returns {*}
     */
    getServerUrl: function (path) {
        return host + path;
    },
    //获取 url 参数
    getUrlParam: function (name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        var result = window.location.search.substr(1).match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    },
    getRootPath: function () {
        // 获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
        var curWwwPath = window.document.location.href;
        // 获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
        var pathName = window.document.location.pathname;
        var pos = curWwwPath.indexOf(pathName);
        // 获取主机地址，如： http://localhost:8083
        var localhostPaht = curWwwPath.substring(0, pos);
        // 获取带"/"的项目名，如：/uimcardprj
        var projectName = pathName.substring(0, pathName.substring(1).indexOf('/') + 1);
        return (localhostPaht + projectName + "/");
        // return (localhostPaht);
    },
    jumpToOther: function (url) {
        window.document.location.href = host + url;
    }
};
export default httpRequest;
