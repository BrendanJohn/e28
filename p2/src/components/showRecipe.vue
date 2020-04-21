<template>
    <router-link :to="{ name: 'recipe', params: {slug: recipe.slug}}">
    <div class='recipe'>
        <div class='recipe-name'>{{ recipe.name }}</div>
        <img class='recipe-thumb' :src='imageSrc' />
    </div>
    </router-link>
</template>

<script>
export default {
    name: '',
    props: ['recipe'],
    data: function() {
        return {
        };
    },
    computed: {
        imageSrc: function() {
            try {
                return require('@/assets/images/recipes/' + this.recipe.slug + '.jpg');
            }
            catch (e) {
                return require('@/assets/images/recipes/image-not-available.jpg'); 
            }
        }
    }
}
</script>

<style scoped>
</style>