<template>
  <v-carousel cycle class="carousel" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item>
      <v-sheet light height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <v-img :src="require('@/assets/carousel.png')" class="responsive carouselImg" contain />
        </v-row>
      </v-sheet>
    </v-carousel-item>
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet :color="colors[i]" height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3">{{ slide }} Slide</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
// import Footer from "@/components/FooterBeach.vue";
// import { EventBus } from "@/eventBus.js";
export default {
  name: "Carousel",
  data: () => ({
    colors: [
      "indigo",
      "warning",
      "pink darken-2",
      "red lighten-1",
      "deep-purple accent-4"
    ],
    slides: ["First", "Second", "Third", "Fourth", "Fifth"]
  })
};
</script>

<style lang="less" scoped>
.carousel {
  width: 100%;
  min-width: 100%;
}
.carouselImg {
  height: 100%;
}
.theme--dark.v-btn.v-btn--icon {
  color: black!important;
}
</style>
