import Vue from 'vue'
import App from '@/App.vue'
import VueRouter from 'vue-router'
import HomePage from '@/components/pages/HomePage.vue'
import AddARecipe from '@/components/pages/addARecipe.vue'
import RecipePage from '@/components/pages/recipePage.vue'
import CategoriesPage from '@/components/pages/categoriesPage.vue'
import RecipesPage from '@/components/pages/recipesPage.vue'
import FavoritesPage from '@/components/pages/favoritesPage.vue'
import store from '@/common/store'

Vue.use(VueRouter);

Vue.config.productionTip = false

//named routes are a good way to remove redundancy
const routes = [
  {path: '/', component: HomePage, name: 'home'},
  {path: '/recipes', component: RecipesPage, name: 'recipes'},
  {path: '/categories', component: CategoriesPage, name: 'categories'},
  {path: '/recipe/:slug', component: RecipePage, name: 'recipe', props: true},
  {path: '/recipes/create', component: AddARecipe, name: 'add a recipe'},
  {path: '/favorites', component: FavoritesPage, name: 'favorites'}
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  store: store,
  router: router, 
  render: h => h(App),
}).$mount('#app')