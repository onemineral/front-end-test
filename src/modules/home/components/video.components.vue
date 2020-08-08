<template>
  <section class="video text-center mt-100">
    <div class="video__svg" v-if="isPlaying" @click="play()">
      <play-svg />
    </div>
    <div class="video__svg" v-else @click="play()">
      <pause-svg />
    </div>
    <img class="m-auto" width="100%" :src="image" @click="play()" />
    <section class="video__progress">
      <section class="video__progress--size">
        <ul v-if="isPlaying">
          <li class="d-inline col-80 pr-25"><progress-component /></li>
          <li class="d-inline pr-25" @click="full()">
            <full-screen-svg v-if="isFull" />
            <remove-full-screen-svg v-else />
          </li>
          <li class="d-inline" @click="mute()">
            <mute-svg v-if="isMute" />
            <som-svg v-else />
          </li>
        </ul>
      </section>
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Image from "../../../assets/img/video.png";
import PlaySvg from "@/assets/svg/play.svg";
import PauseSvg from "@/assets/svg/pause.svg";
import ProgressComponent from "./progress.components.vue";
import SomSvg from "@/assets/svg/som.svg";
import MuteSvg from "@/assets/svg/mute.svg";
import FullScreenSvg from "@/assets/svg/fs.svg";
import RemoveFullScreenSvg from "@/assets/svg/r-fs.svg";

@Component({
  name: "Footer",
  components: {
    PlaySvg,
    PauseSvg,
    SomSvg,
    FullScreenSvg,
    RemoveFullScreenSvg,
    ProgressComponent,
    MuteSvg
  }
})
export default class App extends Vue {
  private isPlaying = false;
  private isMute = false;
  private isFull = false;
  private image = Image;

  /**
   * Change state of var isPlaying
   * @date 2020-08-07
   */
  play() {
    this.isPlaying = !this.isPlaying;
  }

  /**
   * Change state of var isMute
   * @date 2020-08-07
   */
  mute() {
    this.isMute = !this.isMute;
  }

  /**
   * Change state of var isFull
   * @date 2020-08-07
   */
  full() {
    this.isFull = !this.isFull;
  }
}
</script>

<style lang="stylus" scope>
.video
    position relative
    cursor pointer

    &__svg
        display none
        position absolute
        left 0
        right 0
        top 50%
        margin auto

        transform translateY(-50%)

        max-width 30rem
        max-height 30rem
        width 100%

    &__progress
        display none
        position absolute
        bottom 30px
        width 100%
        height 40px

        &--size
          position relative
          margin 0px 90px

    &:hover
        & .video__progress
            display block
        & .video__svg
             display block

@media only screen and (max-width: 950px)
  .video__svg
      max-width 12rem
      max-height  12rem
</style>
