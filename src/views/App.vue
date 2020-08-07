<template>
  <div id="app" :class="styles.main">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as Styles from "../styles/main";

@Component({})
export default class App extends Vue {
  private styles: any = Styles;
}
</script>
