<template>
    <div id='featured'>
        <h2>This Weeks Featured Recipes</h2>
        <ul class='cleanList'>
            <li v-for='recipe in featuredRecipes' :key='recipe.id'>{{ recipe.name }}</li>
        </ul>
    </div>
</template>

<script>
import { recipes } from '@/products.js';
export default {
    name: '',
    props: ['category'],
    data: function() {
        return {
            recipes: recipes
        };
    },
    computed: {
        featuredRecipes: function() {
            function isMatch(recipe) {
                return recipe.categories.includes(this);
            }
            return this.recipes.filter(isMatch, this.category);
        }
    }
}
</script>

<style scoped>
</style>