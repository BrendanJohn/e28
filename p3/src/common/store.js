import Vue from 'vue'
import Vuex from 'vuex'
import * as app from '@/common/app.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cartCount: 0,
        recipes: [],
    },
    mutations: {
        setCartCount(state, payload) {
            state.cartCount = payload;
        },
        updateCartCount(state, payload) {
            state.cartCount += payload;
        },
        updateRecipes(state, payload) {
            state.recipes = payload;
        },
    },
    actions: {
        setRecipes(context) {
            app.api.all('recipes').then(response => {
                context.commit('updateRecipes', response);
            });
        }
    },
    // Getters - Methods used to retrieve and perform some operation on data in the store.
    getters: {
            getRecipeBySlug(state) {
                return function (slug) {
                    for (let key of Object.keys(state.recipes)) {
                        if (state.recipes[key].slug == slug) {
                            return state.recipes[key];
                        }
                    }
                }
            }
        }
})