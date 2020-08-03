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
@font-face {
  font-family: "SC-Med";
  src: url("../src/assets/fonts/saintecolombe-medium.otf");
}

@font-face {
  font-family: "SC-Reg";
  src: url("../src/assets/fonts/saintecolombe-regular.otf");
}

@font-face {
  font-family: "A-Reg";
  src: url("../src/assets/fonts/Averta-Regular.otf");
}

@font-face {
  font-family: "A-SBold";
  src: url("../src/assets/fonts/Averta-Semibold.otf");
}

body {
  margin: 0;
  padding: 0;
  color: #2e2b30;

  &.fullscreen {
    overflow: hidden;
  }
}
</style>
