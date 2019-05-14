/*
 * @Author: yongtian.hong
 * @Date: 2019-02-16 14:22:34
 * @LastEditors: yongtian.hong
 * @LastEditTime: 2019-05-14 19:52:39
 * @Description: 创建store
 *
 *
 */

// index.js

const { sigleFileTemplate, multiFilesTemplate } = require("./template");

const lazyCreator = require(`${process.cwd()}`);

lazyCreator.onInput((inputName, ctx) => {

    ctx.log.warn(`请输入要生成的store名称、会生成在 Examples/demo/store/modules目录下`);

    const targetPath = ctx.resolve(`Examples/demo/store/modules/${inputName}`);

    ctx.log.warn(`store:${sigleFileTemplate}`)

    ctx.generateFiles(targetPath, sigleFileTemplate);

    ctx.log.success(`store创建成功！`)

})

