import Vue from 'vue';
import App from './App';
import 'amfe-flexible';
import { router } from './router';
import store from './store'
// 用于控制浏览器前进后退 使用keep-alive
import Navigation from 'vue-navigation'

import FastClick from 'fastclick'
// 导入资源文件
import { i18n, vantLocales } from './lang'

// vant-ui组件国际化
vantLocales(i18n.locale)
// 处理点击事件延迟300ms问题
FastClick.attach(document.body)
// 用于控制浏览器前进后退缓存
Vue.use(Navigation, {
  router,
  store
})
new Vue({
  store,
  i18n,
  router,
  el: '#app',
  render: h => h(App)
});

