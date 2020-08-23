<template>
  <footer>
    <img src="@/assets/images/footer-background.png" alt />
    <div class="footer-content">
      <links class="links" :links="links"></links>
      <p class="copyright">
        Copyright © {{ new Date().getFullYear() }} Site.com. All rights
        reserved.
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

import Links from "./Links.vue";

import { LinkType } from "../../models/Link";

@Component({
  components: {
    Links,
  },
})
export default class FooterComp extends Vue {
  @Prop() readonly links!: LinkType[];
}
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: column;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
  }

  .footer-content {
    margin: auto 20px 25px;
    display: grid;
    grid-template-columns: auto 40% 30%;
    grid-template-rows: auto;
    grid-template-areas: ". links copyright";

    .links {
      font-size: $font-size-sm;
      grid-area: links;
    }

    .copyright {
      grid-area: copyright;
      font-size: $font-size-xxs;
      justify-self: end;
      align-self: center;
      color: white;
    }
  }
}
</style>
