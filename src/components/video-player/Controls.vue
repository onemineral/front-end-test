<template>
  <transition name="hide">
    <div class="controls" v-if="!hide">
      <progress-bar class="progress-bar" :percentage="progress" />
      <div @click="audio = !audio">
        <volume-off v-if="audio" class="audio" />
        <volume-on v-else class="audio" />
      </div>
      <div @click="toggleFullscreen">
        <fullscreen-off v-if="fullscreen" class="fullscreen" />
        <fullscreen-on v-else class="fullscreen" />
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

import ProgressBar from "./ProgressBar.vue";

import FullscreenOn from "@/assets/icons/fullscreen-on.svg";
import FullscreenOff from "@/assets/icons/fullscreen-off.svg";
import VolumeOn from "@/assets/icons/volume-on.svg";
import VolumeOff from "@/assets/icons/volume-off.svg";

@Component({
  components: {
    FullscreenOn,
    FullscreenOff,
    VolumeOn,
    VolumeOff,
    ProgressBar,
  },
})
export default class Controls extends Vue {
  @Prop(Number) readonly progress!: number;
  @Prop(Boolean) readonly hide!: boolean;

  fullscreen = false;
  audio = true;

  created() {
    document.addEventListener("fullscreenchange", this.toggleFullscreenCss);
  }

  beforeDestroy() {
    document.removeEventListener("fullscreenchange", this.toggleFullscreenCss);
  }

  toggleFullscreenCss(): void {
    this.fullscreen = !this.fullscreen;
    this.$emit("fullscreen", this.fullscreen);

    // Enable/disable scroll on body
    const bodyClasses = document.body.classList;

    this.fullscreen
      ? bodyClasses.add("no-scroll")
      : bodyClasses.remove("no-scroll");
  }

  toggleFullscreen(): void {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
</script>

<style lang="scss" scoped>
$controls-height: 50px;
$buttons-width: 36px;
$buttons-margin: 10px;

.controls {
  position: absolute;
  bottom: 0;
  height: $controls-height;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .progress-bar {
    width: calc(100% - #{($buttons-width + $buttons-margin) * 2} - 50px);
  }
}

.fullscreen,
.audio {
  width: $buttons-width;
  height: $buttons-width;
  margin-left: $buttons-margin;
}

.fullscreen,
.audio,
.progress-bar {
  cursor: pointer;
}

.hide-enter-active,
.hide-leave-active {
  transition: 0.5s;
}

.hide-leave-to,
.hide-enter {
  bottom: -$controls-height;
}
</style>
