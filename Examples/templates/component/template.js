// vue文件模板
const VueTemplate = function(compoenntName) {
  return ` <style lang="scss" scoped>
  .${compoenntName} {
  };
</style>
<template>
  <div class="${compoenntName}">
    
  </div>
 </template>
<script>
    export default {
    name: '${compoenntName}'
    };
</script>
 `;
};

const indexTemplate = function(compoenntName) {
  return `import ${compoenntName} from './${compoenntName}'
  export default ${compoenntName}
 `;
};
module.exports = {
  componentTemplate: VueTemplate,
  indexTemplate: indexTemplate
};
