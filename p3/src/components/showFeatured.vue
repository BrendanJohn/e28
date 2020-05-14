<template>
    <div id='featured'>
        <h2>This Weeks Featured Recipe!</h2>
        <ul class='cleanList'>
            <li v-for='recipe in featuredRecipes' :key='recipe.id'>{{ recipe.name }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: '',
    props: ['category'],
    data: function() {
        return {
        };
    },
    computed: {
        featuredRecipes: function() {
            let featuredRecipes = [];
            // Iterate through all our products
            Object.keys(this.recipes).map(key => {
                // If this product includes the category we're filtering for...
                if (
                    this.recipes[key].categories &&
                    this.recipes[key].categories.includes(this.category)
                ) {
                    // Add it to our featuredProducts array
                    featuredRecipes.push(this.recipes[key]);
                }
            });
            return featuredRecipes;
        },
        recipes: function() {
            return this.$store.state.recipes;
        }
    }
}
</script>

<style scoped>
</style>