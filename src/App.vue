<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
/* eslint-disable */
import Header from "./components/includes/Header";
import Footer from "./components/includes/Footer";

export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
  },
};
</script>

<style lang="scss">
</style>
