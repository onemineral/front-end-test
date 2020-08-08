<template>
  <section class="footer footer__background">
    <section class="containner">
      <ul class="p-relative text-center">
        <li class="footer--link fw-600">
          <a>ABOUT</a>
        </li>
        <li class="footer--link fw-600">
          <a>CONTACT</a>
        </li>
        <li class="footer--link fw-600">
          <a>LEGAL</a>
        </li>
        <li class="footer--link footer--link__right fw-600">
          <a>Copyright © 2019 Site.com. All rights reserved.</a>
        </li>
      </ul>
    </section>
  </section>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ name: "Footer" })
export default class App extends Vue {}
</script>

<style lang="stylus" scope>
.footer
  padding-top 47.6rem
  padding-bottom 2rem

  &__background
    background-color #0000008f

  &--link
      display inline-block
      font-size 1rem
      color white
      padding 1.5rem

      &__right
          position absolute
          right 0
          padding-right 0px


@media only screen and (max-width: 950px)
  .footer--link
    display block
  .footer--link__right
    position: relative;
    width: 100%;
</style>
