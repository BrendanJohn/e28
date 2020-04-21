<template>
    <div id='beverage-page' v-if='beverage'>
        <h1>{{ beverage.name }}</h1>
        <img
            class='beverage-thumb'
            :alt='"beverage image of  " + beverage.name'
            :src='imageSrc' />
        <p class='description'>{{ beverage.description }}</p>
        <div class='price'>${{ beverage.price }}</div>

        <router-link :to='{name: "beverages"}'>&larr; Return to all beverages</router-link>
    </div>
</template>

<script>
import * as app from '@/common/app.js'

export default {
    name: '',
    props: ['slug'],
    data: function() {
        return {
            //slug: this.$route.params.slug,
            beverage: null
        };
    },
    mounted: function () {
        app.api.find('beverages', 'slug', this.slug)
            .then(response =>  {
                this.beverage = response;
        });
    },
    computed: {
        imageSrc: function() {
            try {
                return require('@/assets/images/beverages/' + this.slug + '.jpg');
            }
            catch (e) {
                return require('@/assets/images/beverages/image-not-available.jpg'); 
            }
        },

    }
};
</script>

<style scoped>
</style>