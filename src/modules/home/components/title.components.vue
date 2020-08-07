<template>
  <h1 class="title">{{ title }}</h1>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import TitlesMixin from "../mixins/titles.mixins";

@Component({ name: "Title" })
export default class extends Mixins(TitlesMixin) {}
</script>

<style lang="stylus" scoped>
.title
  font-size 8rem
  text-align center
  color var(--primary-color)
  margin 0
</style>
