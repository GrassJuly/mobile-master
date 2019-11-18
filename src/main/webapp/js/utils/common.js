/**
 * @Created by xzm on 2019/11/15.
 * @Describe：js工具类
 * @Review by：
 * @Modify by：
 * @Version : $ v_1.0 on 2019/11/15
 * @Remark:
 */

/**
 * @desc 工具类对象
 * @param obj 对象
 * @returns true||false
 */
const Tools = {
    /**
     * @desc 获取系统根路径
     */
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
    /**
     * @desc 获取访问路径中某个参数
     * @param paramName 参数名
     * @param url 指定要截取参数的url（可以为空，如果为空url指向当前页面）
     */
    getParamter: function (paramName, url) {
        var seachUrl = window.location.search.replace("?", "");
        if (url != null) {
            var index = url.indexOf('?');
            url = url.substr(index + 1);
            seachUrl = url;
        }
        var ss = seachUrl.split("&");
        var paramNameStr = "";
        var paramNameIndex = -1;
        for (var i = 0; i < ss.length; i++) {
            paramNameIndex = ss[i].indexOf("=");
            paramNameStr = ss[i].substring(0, paramNameIndex);
            if (paramNameStr == paramName) {
                var returnValue = ss[i].substring(paramNameIndex + 1, ss[i].length);
                if (typeof (returnValue) == "undefined") {
                    returnValue = "";
                }
                return returnValue;
            }
        }
        return "";
    },
    /**
     *
     * @desc 判断两个数组是否相等
     * @param {Array} arr1
     * @param {Array} arr2
     * <a href='http://www.jobbole.com/members/wx1409399284'>@return</a> {Boolean}
     */
    arrayEqual: function (arr1, arr2) {
        if (arr1 === arr2) return true;
        if (arr1.length != arr2.length) return false;
        for (var i = 0; i < arr1.length; ++i) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    },

    /**
     *
     * @desc 数组去重
     * @param {Array} arr
     */
    removeDupthird: function (arr) {
        var newArr = [];
        var obj = {};
        for (var i = 0; i < arr.length; i++) {
            obj[arr[i]] = arr[i];
        }
        var list = [];
        for (var i in obj) {
            list.push(i);
        }
        return list;
    },

    /**
     *
     * @desc 获取浏览器类型和版本
     * <a href='http://www.jobbole.com/members/wx1409399284'>@return</a> {String}
     */
    getExplore: function () {
        var sys = {},
            ua = navigator.userAgent.toLowerCase(),
            s;
        (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1] :
            (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] :
                (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] :
                    (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] :
                        (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] :
                            (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] :
                                (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : 0;
        // 根据关系进行判断
        if (sys.ie) return ('IE: ' + sys.ie)
        if (sys.edge) return ('EDGE: ' + sys.edge)
        if (sys.firefox) return ('Firefox: ' + sys.firefox)
        if (sys.chrome) return ('Chrome: ' + sys.chrome)
        if (sys.opera) return ('Opera: ' + sys.opera)
        if (sys.safari) return ('Safari: ' + sys.safari)
        return 'Unkonwn'
    },
    /**
     * 删除字符串两端空格
     * @param str
     * @returns {*}
     */
    trim: function (str) {
        if (typeof str == "undefined" || str == null || str == "") {
            return "";
        }
        return str.replace(/(^\s*) | (\s*$)/g, "");
    },
    equals: function (str1, str2) {
        if (str1 === str2) {
            if (str1 == str2) {
                return true;
            }
        }
        return false;
    },

    isArray: function (obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    },
    isObject: function (obj) {
        return Object.prototype.toString.call(obj) === '[object Object]';
    },
    isNumber: function (obj) {
        return Object.prototype.toString.call(obj) === '[object Number]';
    },
    isString: function (obj) {
        return Object.prototype.toString.call(obj) === '[object String]';
    },
    isFunction: function (obj) {
        return Object.prototype.toString.call(obj) === '[object Function]';
    },
    isBoolean: function (obj) {
        return Object.prototype.toString.call(obj) === '[object Boolean]';
    },
    isNull: function (obj) {
        return obj == null || obj == '' || obj == undefined;
    },
    isNotNull: function (obj) {
        return !this.isNull(obj);
    },
    randomNum: function (min, max) {
        return Math.floor(min + Math.random() * (max - min));
    },
    /**
     * @desc JS日期格式化转换方法
     * @param fmt 日期时间的格式
     *
     * 调用方法
     *    获取当前时间  var time1 = new Date().format("yyyy-MM-dd hh:mm:ss");  console.log(time1);  // 2017-12-08  11:55:30
     *    将指定的日期转换为"年月日"的格式
     var oldTime = (new Date("2012/12/25 20:11:11")).getTime();
     var curTime = new Date(oldTime).format("yyyy-MM-dd");
     console.log(curTime);  // 2012-12-25
     *    将 "时间戳" 转换为 "年月日" 的格式
     var da = 1402233166999;
     da = new Date(da);
     var year = da.getFullYear()+'年';
     var month = da.getMonth()+1+'月';
     var date = da.getDate()+'日';
     console.log([year,month,date].join('-'));  // 2014年-6月-8日
     * 详情参考  https://www.cnblogs.com/tugenhua0707/p/3776808.html
     */
    format: function (fmt) {
        var o = {
            "M+": this.getMonth() + 1,                 //月份
            "d+": this.getDate(),                    //日
            "h+": this.getHours(),                   //小时
            "m+": this.getMinutes(),                 //分
            "s+": this.getSeconds(),                 //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds()             //毫秒
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    },
    /*  本地存储  */

    /**
     * 存储
     * @param key 键
     * @param value 值
     **/
    setLocalStorage: function (key, value) {
        value = typeof value != "object" ? value : JSON.stringify(value);
        window.localStorage.setItem(key, value);
    },

    /**
     * 获取
     * @params key 键
     **/
    getLocalStorage: function (key) {
        var obj = window.localStorage.getItem(key);
        return obj && (obj.indexOf('{') === 0 || obj.indexOf("[") === 0) ? eval("(" + obj + ")") : obj;
    },

    /**
     * 删除
     * @param key: 键
     * 不传参数则清除所有
     **/
    deleteLocalStorage: function (key) {
        key ? window.localStorage.removeItem(key) : window.localStorage.clear();
    }


};
export default Tools;