<template>
    <div id='beverages'>
        <h2>All Beverages</h2>
        <show-beverage
            v-for='beverage in beverages'
            :key='beverage.id'
            :beverage='beverage'
        ></show-beverage>
    </div>
</template>

<script>
import ShowBeverage from '@/components/showBeverage.vue'
import * as app from '@/common/app.js'
export default {
    name: '',
    components: {
        'show-beverage': ShowBeverage
    },
    props: [],
    data: function() {
        return {
            beverage: []
        };
    },
    mounted: function() {
        app.api.all('beverage')
            .then(response =>  {
                this.beverage = response;
            });
   }
}
</script>

<style scoped>
</style>