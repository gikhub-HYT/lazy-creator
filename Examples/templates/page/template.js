// vue文件模板
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
</script>
 `;
};

// store文件模板
const storeTemplate = {
    state: "export default {}",
    mutations: "export default {}",
    actions: "export default {}",
    getters: "export default {}",
    index: `import state from './state';
  import mutations from './mutations';
  import actions from './actions';
  import getters from './getters';
  export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
  }
  `
};

const componentTemplate = function() {
    return `
    //文件扫描函数
    function scanner() {
        let files = {};
        const context = require.context(__dirname, true, /index\.js$/);
        context.keys().forEach(filePath => {
            if (filePath.startsWith("./index")) return;
            const file = context(filePath);
            const fileName = filePath
                .replace("./", "")
                .replace("/index.js", "")
                .trim();
            files[fileName] = file.default;
        });
        return files;
    }
    //扫描计时开始
    let startTime = new Date();

    let components=scanner();
  
  console.log("扫描components耗时", new Date() - startTime);
  
  export default components
  `;
};

module.exports = {
    VueTemplate: VueTemplate,
    storeTemplate: storeTemplate,
    componentTemplate: componentTemplate
};
