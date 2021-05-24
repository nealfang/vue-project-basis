/*
 * @Descripttion:
 * @Author: Fang Peijie
 * @Date: 2021-05-20 17:01:23
 * @LastEditors: Fang Peijie
 * @LastEditTime: 2021-05-22 13:54:54
 */
import Vue from "vue";
import Vuex from "vuex";

const files = require.context("./modules", false, /\.js$/);
const modules = {};

files.keys().forEach((key) => {
  modules[key.replace(/(\.\/|\.js)/g, "")] = files(key).default;
});

Vue.use(Vuex);

export default new Vuex.Store({
  modules,
});
