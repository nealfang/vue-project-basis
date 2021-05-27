/*
 * @Descripttion:
 * @Author: Fang Peijie
 * @Date: 2021-05-20 11:08:37
 * @LastEditors: Fang Peijie
 * @LastEditTime: 2021-05-27 15:06:33
 */
module.exports = {
  extends: "eslint:recommended",
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 6,
    sourceType: "module", //指定源代码存在的位置，script | module，默认为script
  },
  globals: {
    document: true,
    window: true,
  },
  rules: {
    semi: 0, // 关闭分号结尾
  },
};

// 参考：https://segmentfault.com/a/1190000024509889