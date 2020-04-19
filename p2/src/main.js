import Vue from 'vue'
import App from '@/App.vue'
import VueRouter from 'vue-router'
import HomePage from '@/components/pages/HomePage.vue'

Vue.use(VueRouter);

Vue.config.productionTip = false

//named routes are a good way to remove redundancy
const routes = [
  {path: '/', component: HomePage, name: 'home'},
  {path: '/beverages', component: HomePage, name: 'home'},
  {path: '/categories', component: HomePage, name: 'home'},
  {path: '/products/create', component: HomePage, name: 'home'}
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  router: router, 
  render: h => h(App),
}).$mount('#app')