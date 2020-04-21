<template>
    <router-link :to="{ name: 'beverage', params: {slug: beverage.slug}}">
    <div class='beverage'>
        <div class='beverage-name'>{{ beverage.name }}</div>
        <img class='beverage-thumb' :src='imageSrc' />
        <div class='beverage-price'>${{ beverage.price }}</div>
    </div>
    </router-link>
</template>

<script>
export default {
    name: '',
    props: ['beverage'],
    data: function() {
        return {
        };
    },
    computed: {
        imageSrc: function() {
            try {
                return require('@/assets/images/beverages/' + this.beverage.slug + '.jpg');
            }
            catch (e) {
                return require('@/assets/images/beverages/image-not-available.jpg'); 
            }
        }
    }
}
</script>

<style scoped>
</style>