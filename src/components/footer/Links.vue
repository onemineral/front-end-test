<template>
  <ul>
    <li v-for="link in links" :key="link.name">
      <a :href="link.path">{{ link.name }}</a>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

import { LinkType } from "../../models/Link";

@Component
export default class FooterBackground extends Vue {
  @Prop() readonly links!: LinkType[];
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 450px) {
    display: block;
  }

  li {
    text-align: center;
    a {
      color: $light;
      text-transform: uppercase;
      padding: 5px 1rem;
      display: inline-block;
      font-weight: 400;
    }
  }
}
</style>
