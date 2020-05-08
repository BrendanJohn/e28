<template>
  <div id="app">
      <img alt='Mainlogo' id='logo' src='@/assets/images/alehouse-logo.jpg' />
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
            links: ['home', 'recipes', 'categories', 'add a recipe', 'favorites']
        };
    }
};
</script>

<style lang='scss'>
@import './scss/aleHouse.scss';
</style>
