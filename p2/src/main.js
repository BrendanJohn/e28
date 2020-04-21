import Vue from 'vue'
import App from '@/App.vue'
import VueRouter from 'vue-router'
import HomePage from '@/components/pages/HomePage.vue'
import AddABeverage from '@/components/pages/addABeverage.vue'
import BeveragePage from '@/components/pages/beveragePage.vue'
import BeveragesPage from '@/components/pages/beveragesPage.vue'

Vue.use(VueRouter);

Vue.config.productionTip = false

//named routes are a good way to remove redundancy
const routes = [
  {path: '/', component: HomePage, name: 'home'},
  {path: '/beverages', component: BeveragesPage, name: 'beverages'},
  {path: '/beverage/:slug', component: BeveragePage, name: 'beverage', props: true},
  {path: '/beverages/create', component: AddABeverage, name: 'add a beverage'}
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  router: router, 
  render: h => h(App),
}).$mount('#app')