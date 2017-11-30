import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import {routes} from './routes';
import './directives/Transform'

//Uso dos recursos do Vue
Vue.use (VueResource);
//Uso dos serviços de rotas di Vue
Vue.use (VueRouter);

const router = new VueRouter({
   routes,
   //mode history para não precisar usar 0 # ao trocar de página
   mode:'history' 
  });

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
