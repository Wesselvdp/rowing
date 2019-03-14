import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

Vue.use(Buefy)
Vue.config.productionTip = false
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { createProvider } from './vue-apollo'

new Vue({
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
