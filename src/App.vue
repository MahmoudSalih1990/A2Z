<template>
  <header-component />
  <router-view></router-view>
  <footer-component/>

</template>

<script>
import Header from './components/header/Header.vue';
import Footer from './components/footer/Footer.vue';
export default {
  name: 'App',
  components: {
    'header-component' : Header,

    'footer-component': Footer,
  },

}
</script>

<style>

</style>
