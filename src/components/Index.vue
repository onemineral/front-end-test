<template>
  <div id="main-content">
    <video-player></video-player>

    <div id="causes-container">
      <img :src="heart" />
      <div class="copy">20% of your booking will support these organisations</div>
      <div class="line">
        <div class="top"></div>
        <div class="bottom"></div>
      </div>
      <caroussel></caroussel>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import play from "../assets/play.svg";
import heart from "../assets/heart.svg";
import Video from "./index/video";
import Caroussel from "./index/caroussel";

export default {
  data() {
    return {
      heart,
    };
  },
  components: {
    videoPlayer: Video,
    Caroussel,
  },
};
</script>

<style lang="scss" scoped>
#main-content {
  max-width: 1440px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 80px;

  @media screen and (max-width: 767px) {
    padding: 0 40px;
  }

  @media screen and (max-width: 599px) {
    padding: 0 20px;
  }

  #causes-container {
    height: 913px;
    max-width: 1253px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 87px;
    margin-bottom: 159px;

    @media screen and (max-width: 1399px) {
      height: 1300px;
    }

    @media screen and (max-width: 599px) {
      height: 1000px;
      margin-top: 40px;
    }

    .copy {
      font-family: "SC-Reg";
      max-width: 613px;
      width: 100%;
      height: 80px;
      font-size: 32px;
      text-align: center;
      letter-spacing: -0.83px;
      color: #2e2b30;
    }

    .line {
      height: 109px;
      width: 2px;

      .top {
        box-sizing: border-box;
        height: 55px;
        width: 2px;
        border: 2px solid #2e2b30;
      }

      .bottom {
        box-sizing: border-box;
        height: 55px;
        width: 2px;
        border: 2px solid #807a90;
      }
    }
  }
}
</style>