// index.js

const { componentTemplate, indexTemplate } = require("./template");

const lazyCreator = require(`${process.cwd()}`);


lazyCreator
    .log(`请输入要生成的component名称、会生成在Examples/demo/components目录下`)
    .onInput((inputName, ctx) => {

        const targetPath = ctx.resolve(`Examples/demo/components/${inputName}`);

        ctx.generateFile(targetPath, 'index.js', indexTemplate(inputName));

        ctx.generateFile(targetPath, `${inputName}.vue`, componentTemplate(inputName))

        ctx.log.success(`${inputName}模块创建成功！`)

    })
