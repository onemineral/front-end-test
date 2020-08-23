<template>
  <div class="carousel">
    <section>
      <arrow-prev class="arrow" @click="prev()" />
      <div class="slides">
        <transition
          :name="isNext ? 'slide-next' : 'slide-prev'"
          v-for="(node, index) of $slots.default"
          :key="index"
        >
          <slot-wrapper :value="node" v-if="index === position" />
        </transition>
      </div>
      <arrow-next class="arrow" @click="next()" />
    </section>
    <ul class="indicators">
      <li
        v-for="(slide, index) in slides"
        :key="index"
        :class="{ active: position === index }"
      ></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import SlotWrapper from "@/components/helper/SlotWrapper.vue";

import ArrowPrev from "@/assets/icons/arrow-prev.svg";
import ArrowNext from "@/assets/icons/arrow-next.svg";
import { VNode } from "vue";

@Component({
  components: {
    ArrowPrev,
    ArrowNext,
    SlotWrapper,
  },
})
export default class Carousel extends Vue {
  position = 0;
  isNext = false;

  prev() {
    if (!this.$slots.default?.length) {
      return;
    }

    this.isNext = false;

    if (this.position === 0) {
      this.setPosition(this.$slots?.default.length - 1);
    } else {
      this.setPosition(this.position - 1);
    }
  }

  next() {
    if (!this.$slots.default?.length) {
      return;
    }

    this.isNext = true;

    if (this.position === this.$slots?.default.length - 1) {
      this.setPosition(0);
    } else {
      this.setPosition(this.position + 1);
    }
  }

  private setPosition(value: number) {
    this.$nextTick(() => {
      this.position = value;
    });
  }

  get slides(): Array<VNode> {
    return this.$slots.default || [];
  }
}
</script>

<style lang="scss" scoped>
.slide-next-leave-active,
.slide-prev-leave-active,
.slide-next-enter-active,
.slide-prev-enter-active {
  opacity: 0;
  transition: 0.6s ease;
}

.slide-next-leave-active,
.slide-prev-leave-active {
  position: absolute;
  top: 0;
}

.slide-next-leave-active,
.slide-prev-enter-active {
  transform: translate(-100%, 0);
}

.slide-next-enter-active,
.slide-prev-leave-active {
  transform: translate(100%, 0);
}

.slide-next-enter-to,
.slide-prev-enter-to {
  transform: translate(0, 0);
  opacity: 1;
}

.carousel {
  section {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .arrow {
      width: 42px;
      cursor: pointer;
    }

    .slides {
      width: calc(90% - 2 * 42px);
      overflow: hidden;
      position: relative;

      & > div {
        &.slide-left {
          transform: translate(-100%, 0);
        }

        &.slide-right {
          transform: translate(100%, 0);
        }
      }
    }
  }

  .indicators {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10px;
    margin: 30px 0;

    li {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: $dark;
      opacity: 0.2;
      margin: 5px;
      display: inline-block;
      transition: opacity 0.2s ease, width 0.2s ease, height 0.2s ease;

      &.active {
        width: 10px;
        height: 10px;
        opacity: 1;
      }
    }
  }
}
</style>
