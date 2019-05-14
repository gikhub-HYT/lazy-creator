module.exports = {
  multiFilesTemplate: {
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
    }
    `
  },
  sigleFileTemplate: {
    index: ` exports default {
      state: {},
      mutations: {},
      actions:  {},
      getter:  {}
    }
    `
  }
};
