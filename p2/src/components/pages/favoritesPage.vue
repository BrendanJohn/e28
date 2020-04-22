<template>
    <div id='recipes'>
        <h2>My Favorite Recipes</h2>
    <div v-if='hasFavorites'>
        <show-favorite
            v-on:remove-recipe='removeRecipe($event)'
            v-for='recipe in recipes'
            :key='recipe.id'
            :recipe='recipe'
        ></show-favorite>
    </div>
    <div v-else>
        <p>Looks like you don't have any favorites yet, why not visit the recipes page and find one</p>
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
            hasFavorites: false
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
                this.favoriteRecipes.splice(indexOfRecipe, 1);
            }
            localStorage.setItem('favoriteRecipes', this.favoriteRecipes)
        }
    }
}
</script>

<style scoped>
</style>