<template>
    <router-link :to="{ name: 'recipe', params: {slug: recipe.slug}}">
    <div class='recipe'>
        <div class='recipe-name'>{{ recipe.name }}</div>
        <img class='recipe-thumb' :src='imageSrc' />
        <p><button @click.prevent="$emit('remove-recipe', recipe.slug)">Remove from favorites</button></p>
        <transition name='fade'>
            <div class='alert' v-if='removed'>Your recipe was removed from favorites!</div>
        </transition>
    </div>
    </router-link>
</template>

<script>
export default {
    name: '',
    props: ['recipe', 'hasFavorites', 'removed'],
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
    },
    methods: {
        checkIfRemoved: function () {
            if (!localStorage.getItem('favoriteRecipes').includes(this.recipe.slug)) {
                this.removed = true;
            }
        }
    }
}
</script>

<style scoped>
</style>