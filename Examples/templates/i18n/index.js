/*
 * @Author: yongtian.hong
 * @LastEditors: yongtian.hong
 * @Description: i18n自动创建
 * @Date: 2019-02-19 20:14:46
 * @LastEditTime: 2019-05-14 19:52:17
 */
// const { log, src, resolve, mkdir, generateFile } = require("../util");

const lazyCreator = require(`${process.cwd()}`);

const i18nTemplate = require("./template");

lazyCreator
    .log(`请输入要生成的i18n名称、会生成在Examples/demo/i18n目录下`)
    .onInput((inputName, ctx) => {
        const targetPath = ctx.resolve(`Examples/demo/i18n/${inputName}`);

        ctx.generateFiles(targetPath, i18nTemplate);

        ctx.log.success(`${inputName}模块创建成功！`)

    })


