<template>
  <div id="app">
    <img alt="Zipfoods Logo" id="logo" src="./assets/images/zipfoods-logo.png">
      <nav>
          <ul>
              <li v-for='link in links' :key='link'>
                  <router-link :to='{ name: link}' exact>{{ link }}</router-link>
              </li>
          </ul>
      </nav>
  <router-view></router-view>
  </div>
</template>

<script>
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/firestore';

export default {
  name: 'App',
  components: {
  },
  data: function() {
    return {
      links: ['home', 'products', 'categories'],
    };
  },
  mounted : function() {
      // Initialize firebase
    let projectId = 'e28-zipfoods-bm';
    firebase.initializeApp({
        apiKey: 'AIzaSyDy7Xtgm8bNAKHBU1NNGFnQOTPbtuClp2Y',
        authDomain: projectId + '.firebaseapp.com',
        databaseURL: 'https://' + projectId + '.firebaseio.com',
        projectId: projectId,
    });

    // Initialize firestore
    let api = firebase.firestore();

    // api.collection('products')
    //   .add({
    //     slug: 'driscolls-strawberries',
    //     name: 'Driscoll’s Strawberries',
    //     description: 'Driscoll’s Strawberries are consistently the best, sweetest, juiciest strawberries available. This size is the best selling, as it is both convenient for completing a cherished family recipes and for preparing a quick snack straight from the fridge.',
    //     price: 4.99,
    //     available: 0,
    //     weight: 1,
    //     perishable: true, 
    //     categories: ['produce', 'fruits']
    //   })
    //   .then(function (docRef) {
    //     console.log("Document written with ID: ", docRef.id);
    //   })
    //   .catch(function (error) {
    //     console.error("Error adding document: ", error);
    //   });

    api.collection('products')
      .where('slug', '==', 'driscolls-strawberries')
      //.doc('aFUcnr34Be2Q4vMpk2lN')
      .get()
      .then(function(querySnapshot) {
        console.log(querySnapshot.docs.shift().data());
      })
      .catch(function(error) {
        console.log('Error getting documents: ' + error);
    });
  }
}
</script>

<style lang='scss'>
@import '@/scss/zipfoods.scss';
</style>
