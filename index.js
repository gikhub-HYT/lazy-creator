/*
 * @Author: yongtian.hong
 * @LastEditors: yongtian.hong
 * @Description:
 * @Date: 2019-04-13 10:50:29
 * @LastEditTime: 2019-05-14 19:39:50
 */

const helper = require("./libs/helper.js");

class lazyCreator {

    log(...msg) {
        helper.log.warn(...msg);
        return this;
    }

    onInput(callback) {

        (typeof callback !== 'function') && helper.log.error("callback must be a function")

        process.stdin.on("data", function (chunk) {
            const inputName = String(chunk).trim().toString();
            callback(inputName, helper);
        });
        return this;
    }
}

module.exports = new lazyCreator();
