# lazy-creator
一个基于node.js的自定义文件生成器，可以根据预设的项目规范自定义文件模板生成文件，消除不必要的重复性劳动，提升效率，
同时可以实现团队规范与项目结构的一致性

 ![display](https://images.gitee.com/uploads/images/2019/0519/132819_9f71d979_1384885.gif "gitee.gif")

### 1.安装

```
npm install --save lazy-creator 或 yarn add lazy-creator
```

### 2.用法

```
const lazyCreator = require('lazy-creator');

lazyCreator
    .log()
    .onInput((inputName, ctx) => {
      
    })

其中inputName为用户输入的内容，ctx提供以下几个方法：

ctx.log.warn(msg:String) 

ctx.log.success(msg:String) 

ctx.log.error(msg:String) 

ctx.resolve(path:String) //获取目标路径

ctx.generateFile(targetPath:String, fileName:String, fileContent:String)

ctx.generateFiles(targetPath:String, templateObj:Object)

```
### 3.用例
```
const storeTemplate={
      state: "export default {}",
      mutations: "export default {}",
      actions: "export default {}",
      getter: "export default {}",
      index: `import state from './state'
      import mutations from './mutations
      import actions from './actions
      import getter from './getter
      exports default {
         state: state,
         mutations: mutations,
         actions: actions,
         getter: getter
      }`
  };

const i18nTemplate={
    'en_US.js': "export default {}",
    'zh_CN.js': "export default {}",
    'zh_TW.js': "export default {}",
    'index.js': `import en_us from './en_US';
    import zh_cn from './zh_CN';
    import zh_tw from './zh_TW';
    export default{
        en_US:en_us,
        zh_CN:zh_cn,
        zh_TW:zh_tw
    }`
};


const VueTemplate = function(compoenntName) {

    return ` <style lang="scss" scoped>
            </style>
            <template>
              <div class="${compoenntName}-wrap">
                ${compoenntName}组件
              </div>
            </template>
            <script>
            import components from './components'
                export default {
                    name: '${compoenntName}',
                    components:components
                };
            </script>`;
};


lazyCreator
    .log(`请输入要创建的页面名称`)
    .onInput((inputName, ctx) => {
        const targetPath = ctx.resolve(`src/pages/${inputName}`);
        const storePath = ctx.resolve(`${targetPath}/store`);
        const i18nPath = ctx.resolve(`${targetPath}/i18n`);

        ctx.generateFile(targetPath, "page.vue", VueTemplate(inputName));
        ctx.log.success(`page.vue创建成功！`)

        ctx.generateFiles(storePath, storeTemplate);
        ctx.log.success(`store创建成功！`)
            
        ctx.generateFiles(i18nPath, i18nTemplate);
        ctx.log.success(`i18n创建成功！`)        

    })
```
