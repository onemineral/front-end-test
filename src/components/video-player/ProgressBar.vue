<template>
  <div class="progress-bar">
    <div :style="{ width: percentage + '%' }" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ProgressBar extends Vue {
  @Prop(Number) readonly percentage!: number;
}
</script>

<style lang="scss" scoped>
.progress-bar {
  height: 4px;
  background-color: #ffffff70;
  transition: 0.1s;

  & > div {
    height: 100%;
    background-color: #fff;
  }

  &:hover {
    height: 8px;
  }
}
</style>
