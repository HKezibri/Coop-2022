import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.$api = new axios.create({
  baseURL : "https://allweb.fun/coop/api/",
  params : {
    test : true,
  },
  headers: {'Authorization': "ffdee83ba15a9cb83144e6a9b244100470c08b67"}
});

Vue.prototype.$bus = new Vue()

Vue.prototype.$api.interceptors.request.use(function (config) {
  //console.log(config);
  if(store.state.token)
    config.params.token = store.state.token;
  return config;
});

Vue.config.productionTip = false

//Appliquer le nav pour toutes les pages
Vue.component('Header',() => import('@/components/Header.vue'))


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')