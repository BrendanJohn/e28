import Vue from 'vue'
import App from '@/App.vue'
import VueRouter from 'vue-router'
import HomePage from '@/components/pages/HomePage.vue'
import ProductPage from '@/components/pages/ProductPage.vue'
import ProductsPage from '@/components/pages/ProductsPage.vue'
import CategoriesPage from '@/components/pages/CategoriesPage.vue'
import ProductCreatePage from '@/components/pages/ProductCreatePage.vue'

Vue.use(VueRouter);

Vue.config.productionTip = false

//names routes are a good way to remove redundancy
const routes = [
  {path: '/', component: HomePage, name: 'home'},
  {path: '/products', component: ProductsPage, name: 'products'},
  {path: '/product/:slug', component: ProductPage, name: 'product', props: true},
  {path: '/categories', component: CategoriesPage, name: 'categories'},
  {path: '/products/create', component: ProductCreatePage, name: 'add a product'}
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  router: router, 
  render: h => h(App),
}).$mount('#app')
