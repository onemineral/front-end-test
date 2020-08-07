<template>
  <section>
    <div class="home--background">
      <section class="containner">
        <TitleComponent class="pt-96" :title="title" />
        <VideoComponent />
        <section class="text-center mt-125">
          <heart-svg />
          <div class="mt-30">
            <sub-title-component :title="subTitle" />
          </div>
          <div class="line-separation mt-30"></div>
        </section>
        <SliderComponent :sliders="sliders" />
      </section>
    </div>
    <footer-component />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SlideModel from "../model/Slide.model";
import HeartSvg from "@/assets/svg/heart.svg";

import {
  TitleComponent,
  FooterComponent,
  VideoComponent,
  SliderComponent,
  SubTitleComponent
} from "../components/index";

@Component({
  name: "Home",
  components: {
    TitleComponent,
    FooterComponent,
    VideoComponent,
    SliderComponent,
    SubTitleComponent,
    HeartSvg
  }
})
export default class App extends Vue {
  title = "Breathtaking beauty";
  subTitle = "20% of your booking will support these organisations";
  sliders = [
    new SlideModel({
      title: "The Environment",
      subtitle: "Living Oceans Foundation",
      description:
        "We help preserve, protect and restore the world’s oceans and aquatic resources through research, education, and outreach.",
      img: "https://patobravo.000webhostapp.com/img/banner.png",
      btn: "FIND OUT MORE",
      href: "asdsadsa"
    }),
    new SlideModel({
      title: "The Environment",
      subtitle: "Living Oceans Foundation",
      description:
        "We help preserve, protect and restore the world’s oceans and aquatic resources through research, education, and outreach.",
      img: "https://patobravo.000webhostapp.com/img/banner.png",
      btn: "FIND OUT MORE",
      href: "asdsadsa"
    }),
    new SlideModel({
      title: "The Environment",
      subtitle: "Living Oceans Foundation",
      description:
        "We help preserve, protect and restore the world’s oceans and aquatic resources through research, education, and outreach.",
      img: "https://patobravo.000webhostapp.com/img/banner.png",
      btn: "FIND OUT MORE",
      href: "asdsadsa"
    })
  ];
}
</script>

<style lang="stylus" scoped>
.home
    &--background
        background-color white

.line-separation
  position relative
  height 13rem

  // general style for each line
  &:before,
  &:after
    content: "";
    position: absolute;
    width: 2px;
    height: 50%;

  // first line
  &:before
    top: 0;
    background-color: var(--primary-color);

  // second line
  &:after
    bottom: 0;
    background-color: #807a90;
</style>
