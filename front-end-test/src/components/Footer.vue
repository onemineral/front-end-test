<template>
  <div>
    <v-img
      min-width="100"
      :src="require('@/assets/footer.png')"
      class="my-3 responsive background"
      contain
      width="auto"
    >
      <div class="row innerDiv justify-content-center">
        <p class="col-1 footerText" @click="pushTo('/about')">ABOUT</p>
        <p class="col-1 footerText" @click="pushTo('/contact')">CONTACT</p>
        <p class="col-1 footerText" @click="pushTo('/legal')">LEGAL</p>
      </div>
      <div class="row innerDivCopyright">
        <p class="col footerTextCopyright">COPYRIGHT ©2029 Site.com All rights reserved</p>
      </div>
    </v-img>
  </div>
</template>

<script>
export default {
  name: "Footer",

  data: () => ({}),
  methods: {
    pushTo(val) {
      this.$router.push({path: val})
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
  top: 85%;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  cursor: pointer;
  z-index: 100;
}
.background .innerDivCopyright {
  margin: 0;
  top: 85%;
  justify-content: right;
  display: grid;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
}
.background .footerText {
  text-align: center;
  color: white;
  font-size: 12px;
}
.background .footerTextCopyright {
  font-size: 10px;
  text-align: center;
  color: white;
}
</style>
