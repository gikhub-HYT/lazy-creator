// 导出模板
const { controllerTemplate, serviceTemplate } = require("./template");

const lazyCreator = require(`${process.cwd()}`);


lazyCreator
    .log(`请输入您要生成的模块名称`)
    .onInput((inputName, ctx) => {

        const targetPath = ctx.resolve(`Examples/demo/modules/${inputName}`);

        ctx.generateFile(targetPath, `${inputName}.controller.js`, controllerTemplate(inputName))

        ctx.generateFile(targetPath, `${inputName}.service.js`, serviceTemplate(inputName))

        ctx.log.success(`store创建成功！`)

    })
