<template>
  <div class="play-pause" :class="{ hide: hide && playing }">
    <div :style="{ width: width, height: width }">
      <pause class="pause" v-if="playing" />
      <play v-else />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

import Play from "@/assets/icons/play.svg";
import Pause from "@/assets/icons/pause.svg";

@Component({
  components: {
    Play,
    Pause,
  },
})
export default class PlayPause extends Vue {
  @Prop(Boolean) readonly playing!: boolean;
  @Prop(Boolean) readonly hide!: boolean;
  @Prop(String) readonly width!: string;
}
</script>

<style lang="scss" scoped>
.play-pause {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  width: 100%;
  z-index: 1;

  & > div {
    max-width: 250px;
    margin: auto;
    cursor: pointer;
  }

  .pause {
    transition: 0.1s;
    opacity: 0.3;

    &:hover {
      opacity: 1;
    }
  }
}

.hide {
  visibility: hidden;
  opacity: 0;
  transition: 0.2s;
}
</style>
