import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/';
import App from './App.vue';
import router from './router';
import './pages/components/index';
import 'element-ui/lib/theme-chalk/index.css';
import './common/index.scss';
import VCharts from 'v-charts'

Vue.use(VCharts) 
Vue.use(ElementUI);
Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
