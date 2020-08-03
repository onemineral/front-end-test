<template>
  <div id="caroussel">
    <div class="arrow left" @click="prevItem(1)">
      <img :src="arrow" alt />
    </div>
    <div class="content">
      <div class="items">
        <div class="item" :class="{'active': isActive}" v-for="i in items" :key="i.id">
          <div class="copy" :style="{'background-image': 'url(' + box + ')'}">
            <div class="top">
              <span class="theme">{{ i.theme }}</span>
              <div class="title">{{ i.title }}</div>
              <div class="text">{{ i.content }}</div>
            </div>
            <div class="cta">
              <div class="txt">{{i.cta_txt}}</div>
            </div>
          </div>
          <div class="img" :style="{'background-image': 'url(' +i.img_src+')'}"></div>
        </div>
      </div>
      <div class="indicators">
        <div class="ind" :class="{'active': isActive}" v-for="i in items" :key="i.id"></div>
      </div>
    </div>
    <div class="arrow right" @click="plusItem(1)">
      <img :src="arrow" alt />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import corals from "../../assets/corals.jpg";
import img1 from "../../assets/footer.jpg";
import img2 from "../../assets/video.jpg";
import arrow from "../../assets/arrow.svg";
import box from "../../assets/box.svg";

export default {
  data() {
    return {
      isActive: true,
      index: 1,
      arrow,
      box,
      items: [
        {
          id: 1,
          theme: "The Environment",
          title: "Living Oceans Foundation",
          content:
            "We help preserve, protect and restore the world’s oceans and aquatic resources through research, education, and outreach.",
          img_src: corals,
          cta_txt: "find out more",
        },
        {
          id: 2,
          theme: "Another theme 1",
          title: "Another title 1",
          content: "Another copy 1",
          img_src: img1,
          cta_txt: "find out more",
        },
        {
          id: 3,
          theme: "Another Theme 2",
          title: "Another title 2",
          content: "Another copy 2",
          img_src: img2,
          cta_txt: "find out more",
        },
      ],
    };
  },
  methods: {
    showItem(n) {
      var i;
      var slides = document.querySelectorAll(".items .item");
      var dots = document.querySelectorAll(".indicators .ind");
      if (n > slides.length) {
        this.index = 1;
      }
      if (n < 1) {
        this.index = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].className = "item";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        this.isActive = false;
      }
      slides[this.index - 1].className = "item active";
      dots[this.index - 1].className += " active";
      this.isActive = true;
    },
    prevItem(n) {
      this.showItem((this.index -= n));
    },
    plusItem(n) {
      this.showItem((this.index += n));
    },
    currentItem(n) {
      this.showItem((this.index = n));
    },
  },
  mounted() {
    this.showItem(this.index);
  },
};
</script>

<style lang="scss" scoped>
#caroussel {
  height: 566px;
  width: 1253px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .arrow {
    cursor: pointer;

    &.right {
      img {
        transform: rotate(180deg);
      }
    }
  }

  .content {
    width: 1037px;
    height: 566px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    .items {
      width: 1037px;
      height: 492px;

      .item {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        opacity: 0;
        pointer-events: none;
        transition: 0.5s;

        &.active {
          opacity: 1;
          pointer-events: all;
        }

        .copy {
          height: 456px;
          width: 426px;
          position: absolute;
          top: 35px;
          right: 0;
          z-index: -1;

          .top {
            width: 100%;
            height: 395px;
            display: flex;
            flex-direction: column;
            align-items: center;

            .theme {
              color: #25ba06;
              font-family: "A-SBold";
              font-size: 16px;
              letter-spacing: 0;
              line-height: 16px;
              text-align: center;
              margin-top: 40px;
            }

            .title {
              width: 234px;
              height: 72px;
              font-family: "SC-Med";
              font-size: 32px;
              font-weight: 500;
              letter-spacing: 0;
              line-height: 36px;
              text-align: center;
              margin-top: 69px;
            }

            .text {
              width: 272px;
              font-family: "A-Reg";
              font-size: 16px;
              letter-spacing: 0;
              line-height: 20px;
              text-align: center;
              margin-top: 41px;
            }
          }

          .cta {
            width: 100%;
            height: 61px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: 0.5s;

            &:hover {
              .txt {
                color: #25ba06;
              }
            }

            .txt {
              text-transform: uppercase;
              font-family: "A-SBold";
              transition: 0.5s;
            }
          }
        }

        .img {
          width: 639px;
          height: 479px;
          background-size: cover;
        }
      }
    }

    .indicators {
      display: flex;
      height: 10px;
      width: 49px;
      justify-content: space-between;
      align-items: center;
      margin-top: 57px;

      .ind {
        height: 6px;
        width: 6px;
        opacity: 0.25;
        background-color: #2e2b30;
        border-radius: 50%;

        &.active {
          height: 10px;
          width: 10px;
          background-color: #2e2b30;
          opacity: 1;
        }
      }
    }
  }
}
</style>