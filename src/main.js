import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App.vue'
import Category from './components/Category.vue'
import Catalog from './components/Catalog.vue'
import Vuerouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(Vuerouter);

const routes = [{
    path: "/",
    component: Category
  },
  {
    path: "/catalog",
    component: Catalog
  }
];

const router = new Vuerouter({
  routes
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')