<template>
    <div id='recipes'>
        <div class="header-container">
            <h1>Favorite Recipes</h1>
        </div>
    <div v-if='hasFavorites' >
        <show-favorite
            v-on:remove-recipe='removeRecipe($event)'
            v-for='recipe in recipes'
            :key='recipe.id'
            :recipe='recipe'
        ></show-favorite>
    </div>
    <div v-else>
        <p>Looks like you don't have any favorites yet, why not visit the recipes page and find one?</p>
        <router-link :to='{name: "recipes"}'>&larr; Return to all recipes</router-link>
    </div>
    </div>
</template>

<script>
import ShowFavorite from '@/components/showFavorite.vue'
import * as app from '@/common/app.js'
export default {
    name: '',
    components: {
        'show-favorite': ShowFavorite
    },
    props: [],
    data: function() {
        return {
            recipes: [],
            favoriteRecipes: [],
            hasFavorites: '',
            removed: ''
        };
    },
    mounted: function() {
        if (localStorage.getItem('favoriteRecipes')) {
            this.favoriteRecipes = localStorage.getItem('favoriteRecipes').split(",");
            this.hasFavorites = true;
            this.favoriteRecipes.forEach(element =>  {
                app.api.find('recipes', 'slug', element)
                    .then(response =>  {
                    this.recipes.push(response);
                });            
            }); 
        }   
    },
    methods: {
        removeRecipe: function(event) { 
            const indexOfRecipe = this.favoriteRecipes.indexOf(event);
            if (indexOfRecipe > -1) {
                this.recipes.splice(indexOfRecipe, 1);
            }
            let newFavoriteList = [];
            this.recipes.forEach(element =>  {
                newFavoriteList.push(element.slug);
            }); 
            localStorage.setItem('favoriteRecipes', newFavoriteList);
        }
    }
}
</script>

<style scoped>
</style>