<template>
  <footer :style="{'background-image': 'url(' + bg + ')'}">
    <div class="footer-container">
      <div class="item">
        <div id="logo">
          <div class="square">
            <div>G</div>
          </div>
          <div class="line"></div>
          <div class="square"></div>
        </div>
      </div>
      <div class="item">
        <div id="links">
          <div class="link">about</div>
          <div class="link">contact</div>
          <div class="link">legal</div>
        </div>
      </div>
      <div class="item">
        <div id="copyright">Copyright © 2019 Guest.com. All rights reserved.</div>
      </div>
    </div>
  </footer>
</template>

<script>
/* eslint-disable */
import bg from "../../assets/footer.jpg";

export default {
  data() {
    return {
      bg,
    };
  },
};
</script>

<style lang="scss" scoped>
footer {
  height: 476px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: flex-end;

  .footer-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 20px 39px;

    .item {
      width: 33%;
      display: flex;
      justify-content: center;

      &:nth-of-type(1) {
        justify-content: flex-start;
      }

      &:nth-of-type(3) {
        justify-content: flex-end;
      }

      #logo {
        width: 33px;
        height: 67px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .square {
          width: 31.63px;
          height: 30.72px;
          border: 1.82px solid #fff;

          &:nth-of-type(1) {
            border-bottom: none;
            display: flex;
            align-items: center;
            justify-content: center;

            > div {
              color: #fff;
              font-family: "A-Reg";
            }
          }

          &:nth-of-type(3) {
            border-top: none;
          }
        }

        .line {
          width: 19.54px;
          height: 1.82px;
          background-color: #fff;
        }
      }

      #links {
        width: 290px;
        display: flex;
        justify-content: space-between;
        color: #fff;

        .link {
          text-transform: uppercase;
          font-family: "A-SBold";
        }
      }

      #copyright {
        color: #fff;
        font-family: "A-SBold";
      }
    }
  }
}
</style>