<template>
  <div id="header">
    <h1>Breathtaking beauty</h1>
  </div>
</template>

<script>
/* eslint-disable */
export default {};
</script>

<style lang="scss" scoped>
#header {
  max-width: 1440px;
  margin: auto;

  @media screen and (max-width: 767px) {
    padding: 0 40px;
  }

  @media screen and (max-width: 599px) {
    padding: 0 20px;
  }

  h1 {
    font-size: 80px;
    line-height: 80px;
    letter-spacing: -2.08px;
    text-align: center;
    color: #2e2b30;
    font-family: "SC-Reg";

    @media screen and (max-width: 767px) {
      font-size: 60px;
    }

    @media screen and (max-width: 599px) {
      font-size: 40px;
    }
  }
}
</style>