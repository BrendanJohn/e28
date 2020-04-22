<template>
    <div id='recipes'>
        <h2>My Favorite Recipes</h2>
        <show-recipe
            v-for='recipe in recipes'
            :key='recipe.id'
            :recipe='recipe'
        ></show-recipe>
    </div>
</template>

<script>
import ShowRecipe from '@/components/showRecipe.vue'
export default {
    name: '',
    components: {
        'show-recipe': ShowRecipe
    },
    props: [],
    data: function() {
        return {
            recipes: []
        };
    },
    mounted: function() {
        if (localStorage.recipes) {
            console.log('found recipe' + localStorage.recipes)
            this.recipes = localStorage.recipes;
        }
   }
}
</script>

<style scoped>
</style>