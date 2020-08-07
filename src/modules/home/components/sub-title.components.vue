<template>
  <h2 class="m-auto sub--title sub--title--containner">
    {{ title }}
  </h2>
</template>
<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import TitlesMixin from "../mixins/titles.mixins";

@Component({ name: "Sub-title" })
export default class extends Mixins(TitlesMixin) {}
</script>
<style lang="stylus" scoped>
.sub--title
    font-size 3.2rem
    line-height 3.2rem
    font-weight 300
    color var(--primary-color)

    &--containner
        max-width 58rem
</style>
