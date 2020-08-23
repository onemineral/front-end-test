<template>
  <div id="app">
    <landing-page />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LandingPage from "@/views/LandingPage.vue";

@Component({
  components: {
    LandingPage,
  },
})
export default class App extends Vue {}
</script>
