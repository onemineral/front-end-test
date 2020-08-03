<template>
  <div id="video-container">
    <div class="video" :style="{'background-image': 'url(' + video + ')'}">
      <div class="main-btn">
        <div
          class="play btn"
          :class="{'playing': playing}"
          :style="{'background-image': 'url(' + play + ')'}"
          @click="playVideo()"
        ></div>
        <div
          class="pause btn"
          :class="{'playing': playing}"
          :style="{'background-image': 'url(' + pause + ')'}"
          @click="pauseVideo()"
        ></div>
      </div>
      <div class="controls" :class="{'playing': playing}">
        <div class="time-bar">
          <div class="elapsed"></div>
        </div>
        <img
          class="btn"
          :src="fullscreen == false ? enterFS : exitFS"
          @click="fullscreen == false ? enterFullScreen() : exitFullScreen()"
        />
        <img
          class="btn"
          :src="mute == false ? soundOff : soundOn"
          @click="mute == false ? SoundOff() : SoundOn()"
        />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import video from "../../assets/video.jpg";
import play from "../../assets/play.svg";
import pause from "../../assets/pause.svg";
import enterFS from "../../assets/enter-fs.svg";
import exitFS from "../../assets/exit-fs.svg";
import soundOn from "../../assets/volume-on.svg";
import soundOff from "../../assets/volume-off.svg";

export default {
  data() {
    return {
      fullscreen: false,
      mute: true,
      playing: false,
      video,
      play,
      pause,
      enterFS,
      exitFS,
      soundOn,
      soundOff,
    };
  },
  methods: {
    playVideo() {
      this.playing = true;
    },
    pauseVideo() {
      this.playing = false;
    },
    enterFullScreen() {
      this.fullscreen = true;
      var videoContainer = document.getElementById("video-container");
      var body = document.getElementsByTagName("BODY")[0];
      videoContainer.className = "fullscreen";
      body.className = "fullscreen";
    },
    exitFullScreen() {
      this.fullscreen = false;
      var videoContainer = document.getElementById("video-container");
      var body = document.getElementsByTagName("BODY")[0];
      videoContainer.className = "";
      body.className = "";
    },
    SoundOn() {
      this.mute = false;
    },
    SoundOff() {
      this.mute = true;
    },
  },
};
</script>

<style lang="scss" scoped>
#video-container {
  max-width: 1253px;
  width: 100%;
  height: 836px;
  display: flex;
  align-items: center;

  &.fullscreen {
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    z-index: 99999;
    max-width: 100%;

    .video {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }

  .video {
    width: 100%;
    height: 705px;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .main-btn {
      max-width: 303px;
      max-height: 303px;
      width: 100%;
      height: 100%;
      cursor: pointer;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      .btn {
        width: 100%;
        height: 100%;
        position: absolute;
        transition: 0.5s;

        &:hover {
          opacity: 1;
        }
      }

      .play {
        opacity: 0.5;
        pointer-events: all;
        &.playing {
          opacity: 0;
          pointer-events: none;
        }

        &:hover {
          opacity: 1;
        }
      }

      .pause {
        opacity: 0;
        pointer-events: none;
        &.playing {
          opacity: 0.5;
          pointer-events: all;
        }

        &:hover {
          opacity: 1;
        }
      }
    }

    .controls {
      max-width: 1252px;
      width: 100%;
      height: 100px;
      display: flex;
      align-self: flex-end;
      align-items: center;
      justify-content: space-around;
      opacity: 0;
      pointer-events: none;
      margin: 0 30px;

      &.playing {
        opacity: 1;
        pointer-events: all;
      }

      .time-bar {
        box-sizing: border-box;
        height: 3px;
        max-width: 1059px;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.25);

        .elapsed {
          box-sizing: border-box;
          height: 3px;
          max-width: 469px;
          width: 100%;
          background-color: #fff;
        }
      }

      .btn {
        width: 22px;
        height: 22px;
        background-size: 80%;
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
        opacity: 0.5;
        transition: 0.5s;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
}
</style>