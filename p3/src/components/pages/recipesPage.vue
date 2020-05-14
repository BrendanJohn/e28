<template>
    <div id='recipes'>
        <div class="header-container">
            <h1>All Recipes</h1>
        </div>
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
    data: function() {
        return {
        };
    },
    computed: {
        recipes: function() {
            return this.$store.state.recipes;
        }
    }
}
</script>

<style scoped>
</style>