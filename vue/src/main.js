import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import Axios from 'axios'
import ES6Promise from 'es6-promise';
import VueElementLoading from 'vue-element-loading'
import {store} from './store'
import VSwitch from 'v-switch-case'

Vue.config.productionTip = false
Vue.prototype.$http = Axios
Vue.use(VSwitch)

new Vue({
  render: h => h(App),
  Vuex,
  Axios,
  router,
  ES6Promise,
  VueElementLoading,
  store
}).$mount('#app')
