<template>
  <v-app>
    <AppHeader/>
    <router-view/>
  </v-app>

</template>

<script>
import AppHeader from './components/layouts/AppHeader.vue'


export default {
  name: 'App',
  components: {
    AppHeader,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Oxygen:300,400,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Comfortaa&display=swap');

 /* $body-font-family: 'Oxygen'; */
/*$title-font: 'Comfortaa'; */
a{
  text-decoration: none;
}
body {
   font-family: 'Oxygen', sans-serif !important;
   /* .title { 
       font-family: $title-font, sans-serif !important;
   } */
}
</style>
