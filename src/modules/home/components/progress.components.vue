<template>
  <section class="progress p-relative" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ name: "ProgressBar" })
export default class ProgressBar extends Vue {}
</script>
<style lang="stylus" scoped>
.progress
    &::before,
    &::after
        content ''
        position absolute
        left 0
        top -11px
        width 100%
        height 4px

    &::before
      background-color #ffffff7d

    &::after
     background-color white
     width 10%
</style>
