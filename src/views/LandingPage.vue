<template>
  <div>
    <main>
      <h1 class="header">Breathtaking beauty</h1>
      <video-player class="video-player" />
      <introduction />
      <carousel>
        <slide />
        <slide />
        <slide />
        <slide />
        <slide />
      </carousel>
    </main>
    <footer-wrapper :links="links" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import VideoPlayer from "@/components/video-player/VideoPlayer.vue";
import Introduction from "@/components/Introduction.vue";
import Carousel from "@/components/carousel/Carousel.vue";
import Slide from "@/components/carousel/Slide.vue";
import FooterWrapper from "@/components/footer/FooterWrapper.vue";

import { LinkType } from "../models/Link";

@Component({
  components: {
    VideoPlayer,
    Introduction,
    Carousel,
    Slide,
    FooterWrapper,
  },
})
export default class LandingPage extends Vue {
  links: LinkType[] = [
    {
      name: "about",
      path: "/about",
    },
    {
      name: "contact",
      path: "/contact",
    },
    {
      name: "legal",
      path: "/legal",
    },
  ];
}
</script>

<style lang="scss" scoped>
main {
  text-align: center;

  .header,
  .video-player {
    margin-bottom: 6vw;
  }

  .header {
    font-size: 4rem;
    font-weight: 400;
  }
}
</style>
