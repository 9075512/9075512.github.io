# JS脱敏相关操作

```js
/**
 * 脱敏相关操作
 */
export class Desensitized {

    static phoneReg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{4}(\d{4})$/; // 手机号正则校验
    static idNoReg = /(\d{6})(\d*)(\w{3})/; // 简易身份证号码正则
    static addrReg = /(.{9})(.*)/; // 地址正则

    /**
     * 名字脱敏 保留首位
     * @param fullName
     * @returns {string}
     */
    static desensitizedName (fullName) {
        if (!fullName) {
            return "";
        }

        let str = fullName.substr(0, 1);
        for (let i = 0; i < fullName.length - 1; i++) {
            str += '*';
        }

        return str;
    }

    /**
     * 脱敏公用
     * @param str 脱敏字符串
     * @param begin 起始保留长度，从0开始
     * @param end 结束保留长度，到str.length结束
     * @returns {string}
     */
    static desensitizedCommon (str, begin, end) {
        if (!str && (begin + end) >= str.length) {
            return "";
        }

        let leftStr = str.substring(0, begin);
        let rightStr = str.substring(str.length - end, str.length);

        let strCon = ''
        for (let i = 0; i < str.length - end - begin; i++) {
            strCon += '*';
        }
        return leftStr + strCon + rightStr;
    }

    /**
     * 手机号脱敏
     * @param str
     * @returns {string|*|string}
     */
    static desensitizedPhone (str) {
        if (!str) {
            return "";
        }
        return str.replace(this.phoneReg, '$1****$2');
    }

    /**
     * 身份证号脱敏
     * @param str
     * @returns {string|*|string}
     */
    static desensitizedIdNo (str) {
        if (!str) {
            return "";
        }
        if(this.idNoReg.test(str)){
            let text1 = RegExp.$1;
            let text3 = RegExp.$3;
            let text2 = RegExp.$2.replace(/./g,"*");
            return  text1 + text2 +  text3;
        }
        return str;
    }

    /**
     * 地址脱敏
     * @param str
     * @returns {string|*|string}
     */
    static desensitizedAddr(str){
        if (!str) {
            return "";
        }
        if(this.addrReg.test(str)){
            let text1 = RegExp.$1;
            let text2 = RegExp.$2.replace(/./g,"*");
            return  text1 + text2 ;
        }
        return str;
    }

}

```

