const controllerTemplate = function(moduleName) {
  return `const  ${moduleName}Api = require("../../api/${moduleName}.js");
  const ${moduleName}Service=require("./${moduleName}.serviice.js");
  exports.${moduleName} = {
    url: "/${moduleName}",
    method: "post",
    controller: async function(ctx, next) {
      
    }
  };`;
};

const serviceTemplate = function(moduleName) {
  return `class ${moduleName}{};
  module.exports=${moduleName}`;
};

module.exports = {
  controllerTemplate,
  serviceTemplate
};
