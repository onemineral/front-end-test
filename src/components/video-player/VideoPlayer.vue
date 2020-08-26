<template>
  <div
    class="video-player"
    :class="{ fullscreenEnabled: fullscreen, 'cursor-hide': hide && playing }"
    @mousemove="resetHide()"
  >
    <div>
      <play-pause
        :playing="playing"
        width="25%"
        :hide="hide"
        @click.native="togglePlay"
      />
    </div>
    <img src="@/assets/images/video-background.png" alt @click="togglePlay" />
    <controls
      :progress="progress"
      :hide="hide"
      @fullscreen="fullscreen = $event"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Controls from "./Controls.vue";
import PlayPause from "./PlayPause.vue";

@Component({
  components: {
    Controls,
    PlayPause,
  },
})
export default class VideoPlayer extends Vue {
  playing = false;
  progress = 0;
  hide = true;
  fullscreen = false;

  // Timer ids
  controlsTimeout = 0;
  playingInterval = 0;

  togglePlay(): void {
    this.playing = !this.playing;

    if (this.playing) {
      this.playingInterval = setInterval(() => {
        this.progress += 0.05;
        if (this.progress >= 100) {
          this.progress = 0;
          this.playing = false;
          this.stopInterval();
        }
      }, 20);
    } else {
      this.stopInterval();
    }
  }

  resetHide(): void {
    this.hide = false;

    clearTimeout(this.controlsTimeout);
    this.controlsTimeout = setTimeout(() => {
      this.hide = true;
    }, 1000);
  }

  private stopInterval(): void {
    clearInterval(this.playingInterval);
  }
}
</script>

<style lang="scss" scoped>
.video-player {
  position: relative;
  width: 100%;
  height: 100%;
  user-select: none;

  img {
    width: 100%;
  }
}

.fullscreenEnabled {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: black;

  & > img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
}
</style>
