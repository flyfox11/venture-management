
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import ElementUI from 'element-ui'
import * as filters from './assets/js/filter'
import 'element-ui/lib/theme-default/index.css'
Vue.config.productionTip = false
Object.keys(filters).forEach(k => Vue.filter(k, filters[k])) //注册全局过滤器
Vue.use(ElementUI);
new Vue({
  el: '#app',
  router,
  store,
  /*template: '<App/>',
  components: { App }*/
  //...App
  render: h => h(App)
})
