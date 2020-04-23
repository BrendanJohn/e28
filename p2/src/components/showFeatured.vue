<template>
    <div id='featured'>
        <h2>This Weeks Featured Recipes</h2>
        <ul class='cleanList'>
            <li v-for='recipe in featuredRecipes' :key='recipe.id'>{{ recipe.name }}</li>
        </ul>
    </div>
</template>

<script>
import * as app from '@/common/app.js'
export default {
    name: '',
    props: ['category'],
    data: function() {
        return {
            recipes: [],
            featuredRecipes: ''
        };
    },
    watch: {
        recipes: function() {
            function isMatch(recipe) {
                return recipe.categories.includes(this);
            }
            this.featuredRecipes = Object.values(this.recipes).filter(isMatch, this.category);
        }
    },
    mounted: function() {
        app.api.all('recipes')
            .then(response =>  {
                this.recipes = response;
            });
   }
}
</script>

<style scoped>
</style>