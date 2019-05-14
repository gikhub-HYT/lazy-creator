module.exports = {
    en_US: "export default {}",
    zh_CN: "export default {}",
    zh_TW: "export default {}",
    index: `import en_us from './en_US';
  import zh_cn from './zh_CN';
  import zh_tw from './zh_TW';
  export default{
    en_US:en_us,
    zh_CN:zh_cn,
    zh_TW:zh_tw
  }`
};
