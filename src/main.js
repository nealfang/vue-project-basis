/*
 * @Descripttion:
 * @Author: Fang Peijie
 * @Date: 2021-05-18 17:09:18
 * @LastEditors: Fang Peijie
 * @LastEditTime: 2021-05-21 17:54:22
 */
import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
