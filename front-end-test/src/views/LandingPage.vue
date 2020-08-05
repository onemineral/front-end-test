<template>
  <div>
    <h1 class="title mb-10">Breathtaking beauty</h1>
    <v-container class="content videoPlayer">
      <VideoPlayer :overlayProp="false" :videoTimer="videoTimer" class="videoPlayer" />
      <v-overlay :value="fullscreen">
        <v-btn icon @click="fullscreen = false" class="closeBtn">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <VideoPlayer :overlayProp="fullscreen" :videoTimer="videoTimer" class="videoPlayer" />
      </v-overlay>
    </v-container>

    <v-container class="mt-15 content">
      <div class="carouselDivText">
        <v-img :src="require('@/assets/heartIcon.png')" class="responsive middleContent" contain width="62" />
        <h3 class="middleText mt-5">20% of your booking will support these<br>organisations</h3>
        <v-img :src="require('@/assets/line.png')" class="responsive middleContent mt-5" contain width="2" />
      </div>
        <Carousel class="mt-5"/>
    </v-container>
    
    <Footer class="footer" />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import { EventBus } from "@/eventBus.js";
import VideoPlayer from "@/components/VideoPlayer.vue";
import Carousel from "@/components/Carousel.vue";
export default {
  name: "LandingPage",
  components: {
    Footer,
    VideoPlayer,
    Carousel
  },
  data: () => ({
    fullscreen: false,
    videoTimer: null
  }),
  mounted() {
    EventBus.$on("overlayMessage", data => {
      this.fullscreen = data;
    });
    EventBus.$on("percentageMessage", data => {
      this.videoTimer = data;
    });
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
.v-application .title {
  text-align: center;
  margin-top: 5vh;
  font-family: "Libre Baskerville", serif !important;
  font-size: 60px !important;
}
.content {
  min-height: calc(100vh - 30rem);
}
.footer {
  margin: 11rem auto 0 auto;
}
.closeBtn {
  margin: 0 0 0 auto;
  display: block !important;
  color: black !important;
}
.carouselDivText {
  justify-content: center;
  display: grid;
}
.middleContent {
  margin: 0 auto;
  display: block;
}
.middleText {
  text-align: center;
  font-family: 'Libre Baskerville', serif!important;
}
</style>
