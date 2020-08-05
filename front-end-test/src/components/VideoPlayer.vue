<template>
  <div id="videoPlayer">
    <v-row align="center" justify="center">
      <v-img
        @mouseover="hover = true"
        @mouseleave="hideControls()"
        :src="require('@/assets/Bitmap.png')"
        class="responsive background"
        contain
        width="auto"
      >
        <div class="innerDiv">
          <v-slide-y-transition>
            <div v-if="!video">
              <v-img @click="startVideo()" src="@/assets/Play.png" class="videoBtn" />
            </div>
            <div v-else v-show="hover">
              <v-img
                transition="slide-x-transition"
                @click="stopVideo()"
                src="@/assets/Pause.png"
                class="videoBtn"
              />
            </div>
          </v-slide-y-transition>
        </div>
        <v-slide-y-transition>
          <template v-if="video" style="margin-top -20px">
            <div class="row container controllersContainer">
              <div v-show="hover" class="col-md-10">
                <v-progress-linear
                  transition="slide-x-transition"
                  class="bar"
                  v-model="percentage"
                  color="white"
                  height="5"
                ></v-progress-linear>
              </div>
              <div v-show="hover" class="col">
                <v-img
                  @click="fullscreenClick()"
                  src="@/assets/Fullscreen.png"
                  class="controls fullscreen col"
                />
              </div>
              <div v-show="hover" class="col">
                <v-slide-y-transition v-if="sound">
                  <v-img @click="sound = !sound" src="@/assets/VolumeOff.png" class="mt-n1 controls col" />
                </v-slide-y-transition>
                <v-slide-y-transition v-else>
                  <v-img @click="sound = !sound" src="@/assets/VolumeOn.png" class="mt-n1 controls col" />
                </v-slide-y-transition>
              </div>
            </div>
          </template>
        </v-slide-y-transition>
      </v-img>
    </v-row>
  </div>
</template>

<script>
import { EventBus } from "@/eventBus.js";
export default {
  name: "VideoPlayer",
  props: {
    overlayProp: {
      type: Boolean,
      default: false
    },
    videoTimer: {
      type: Number,
      default: null
    }
  },
  data: () => ({
    video: false,
    hover: false,
    percentage: 0,
    showFullscreen: false,
    sound: true,
  }),
  watch: {
    videoTimer() {
      this.percentage = this.videoTimer;
    },
    percentage() {
      EventBus.$emit("percentageMessage", this.percentage);
    }
  },
  created() {
    if (this.videoTimer) {
      this.percentage = this.videoTimer;
    }
    this.showFullscreen = this.overlayProp;
  },
  methods: {
    startVideo() {
      this.hover = true;
      this.video = !this.video;
      this.incrementVideo = setInterval(() => {
        this.percentage++;
      }, 1000);
    },
    stopVideo() {
      this.video = !this.video;
      clearInterval(this.incrementVideo);
    },
    fullscreenClick() {
      clearInterval(this.incrementVideo);
      this.video = !this.video;
      this.showFullscreen = !this.showFullscreen;
      EventBus.$emit("overlayMessage", this.showFullscreen);
    },
    hideControls() {
      setTimeout(() => this.hover = false, 1000);
    }
  }
};
</script>


<style lang="less" scoped>
.background {
  position: relative;
}
.background .innerDiv {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
.background .videoBtn {
  width: 32vh;
}
.background .fullscreen {
  top: 10%;
}
.background .bar {
  margin: 0;
  top: 28%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
.background .controls {
  max-width: 32px;
  margin: 0 0 0 auto;
  height: 41px;
  cursor: pointer;
}
.background .controls:hover {
  transform: scale(1.3);
}
.background .controllersContainer {
  margin: 0;
  position: absolute;
  top: 90%;
  left: 50%;
  width: 90%;
  transform: translate(-50%, -50%);
}
.active {
  max-width: 26%;
}
</style>
