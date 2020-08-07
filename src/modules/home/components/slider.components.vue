<template>
  <section class="mt-40 slider">
    <div class="slider--container">
      <ul class="slider--dots">
        <li @click="prevSlide" class="slider--dots--prev">
          <left-svg />
        </li>
        <li @click="nextSlide" class="slider--dots--next">
          <right-svg />
        </li>
      </ul>
      <ul class="slider--items" :style="styleObject">
        <li v-for="slider in sliders" :key="slider.message" class="slider--items--item">
          <section class="col-60 p-relative slider--left  text-right">
            <img width="85%" class="slider--left--img" :src="slider.img" />
          </section>
          <section class="col-40 slider--right">
            <section class="slider--right--containner">
              <section class="p-relative slider--right--border">
                <h5 class="slider--right--title text-center pt-30 fw-500">
                  {{ slider.title }}
                </h5>
                <section class="m-auto mw-250">
                  <h6 class="text-center fw-400 mt-60 mb-50 mw-250 fs-32">
                    {{ slider.subtitle }}
                  </h6>
                </section>
                <section class="mw-290 m-auto">
                  <p class="m-auto fs-16 lh-20 fw-400  text-center pb-80">
                    {{ slider.description }}
                  </p>
                </section>
              </section>
              <a :href="slider.href" class="slider--right--btn text-center fw-600 fs-16">
                {{ slider.btn }}
              </a>
            </section>
          </section>
        </li>
      </ul>
    </div>
    <ul class="slider--nav">
      <li
        v-for="(slider, index) in sliders"
        :key="index"
        @click="changeSlide(++index)"
        :class="{ active: activeSlide === ++index, 'slider--nav--item': true }"
      ></li>
    </ul>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import SlideModel from "../model/Slide.model";
import LeftSvg from "@/assets/svg/left.svg";
import RightSvg from "@/assets/svg/right.svg";

@Component({
  name: "Slider",
  components: {
    LeftSvg,
    RightSvg
  }
})
export default class Slider extends Vue {
  @Prop()
  sliders: SlideModel[];

  activeSlide = 1;

  get styleObject() {
    const width = 0 - (this.activeSlide - 1) * 1250;
    return {
      transform: `translateX(${width}px)`
    };
  }

  /**
   * Chnage to specific slider
   * @date 2020-08-08
   * @param Number num slider number
   */
  changeSlide(num: number) {
    this.activeSlide = num;
  }

  /**
   * Go to next slider
   * @date 2020-08-08
   */
  nextSlide() {
    this.activeSlide < this.sliders.length && this.activeSlide++;
  }

  /**
   * Previews slider
   * @date 2020-08-08
   */
  prevSlide() {
    this.activeSlide > 1 && this.activeSlide--;
  }
}
</script>

<style lang="stylus" scoped>
.slider
  position relative
  padding-bottom 17.0rem

  &--container
    overflow hidden
    margin auto
    position relative

  &--dots
    &--prev,
    &--next
      position absolute
      top 50%
      z-index 10
      transform translateY(-50%)
      cursor pointer

    &--prev
      left 0px

    &--next
      right 0

  &--items
    width 375rem
    overflow hidden
    transition all 0.32s ease

    &--item
      float left
      width 125rem

  &--left
    z-index 1

  &--right
    &--containner
      margin-top 4rem
      margin-right 10rem
      margin-left -3rem


    &--title
      color #25BA06
      font-size 1.6rem

    &--border
      &::after,
      &::before
        content ""
        position absolute
        background-color var(--primary-color)

      &::before
        top 0
        left 0

        width 98%
        height: 2px

      &::after
        right 0
        bottom 0

        width 2px
        height 98%


    &--btn
      display: block
      padding 2.3rem 0px
      border 2px var(--primary-color) solid
      color var(--primary-color)

  &--nav
    position absolute
    bottom 10rem
    z-index 2
    width 100%
    text-align center
    cursor pointer

    &--item
      position relative
      display inline-block
      margin 6px
      height 6px
      width 6px
      border-radius 5px
      background-color #cbcacb

      &.active
        &::after
          content ""
          position absolute
          height 10px
          width 10px
          background-color var(--primary-color)
          left -2px
          top -2px
          border-radius 10px
</style>
