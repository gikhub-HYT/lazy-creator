// index.js

// 导出模板
const { VueTemplate, storeTemplate, componentTemplate } = require("./template");
const i18nTemplate = require("../i18n/template");
const lazyCreator = require(`${process.cwd()}`);

lazyCreator
    .log(`请输入要创建的页面名称`)
    .onInput((inputName, ctx) => {
        const targetPath = ctx.resolve(`Examples/demo/pages/${inputName}`);
        const storePath = ctx.resolve(`${targetPath}/store`);
        const i18nPath = ctx.resolve(`${targetPath}/i18n`);

        ctx.generateFile(targetPath, "page.vue", VueTemplate(inputName));
        ctx.log.success(`page.vue创建成功！`)

        ctx.generateFiles(storePath, storeTemplate);
        ctx.log.success(`store创建成功！`)

        ctx.generateFiles(i18nPath, i18nTemplate);
        ctx.log.success(`i18n创建成功！`)
    })

