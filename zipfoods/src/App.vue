<template>
    <div id='app'>
        <img alt='ZipFoods logo' id='logo' src='@/assets/images/zipfoods-logo.png' />

        <nav>
            <ul>
                <li v-for='link in links' :key='link'>
                    <router-link :to='{ name: link }' exact>{{ link }}</router-link>
                </li>
            </ul>
        </nav>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {},
    data: function() {
        return {
            links: ['home', 'products', 'categories', 'add a product']
        };
    },
    mounted: function() {}
};
</script>

<style lang='scss'>
@import '@/scss/zipfoods.scss';
</style>