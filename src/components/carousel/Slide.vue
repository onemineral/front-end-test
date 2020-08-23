<template>
  <div>
    <img src="@/assets/images/carousel-1.png" alt />
    <div class="content">
      <div>
        <h4 class="category">The Environment</h4>
        <h2 class="title">Living Oceans Foundation</h2>
        <p class="text">
          We help preserve, protect and restore the world’s oceans and aquatic
          resources through research, education, and outreach.
        </p>
      </div>
      <a href="/">find out more</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Slide extends Vue {}
</script>

<style lang="scss" scoped>
img {
  position: relative;
  width: 60%;
}

.content {
  display: inline-block;
  margin-left: -5%;
  width: 45%;

  border-style: solid;
  border-width: 2px;

  div {
    padding: 0 20%;
  }

  .category {
    color: $green;
    font-weight: normal;
  }

  .title {
    font-size: 2rem;
  }

  .title,
  .category {
    font-weight: normal;
    padding: 10%;
  }

  .text {
    text-shadow: 0px 4px 4px #00000044;
    padding-bottom: 40%;
  }

  a {
    display: block;
    text-transform: uppercase;
    border-top-style: solid;
    border-width: 2px;
    padding: 15px;
  }
}

@media screen and (max-width: 768px) {
  img {
    width: 100%;
  }

  .content {
    width: 100%;
    margin-left: 0;

    div {
      padding: 0 10%;
    }

    .title {
      padding: 0 0 20px 0;
    }

    .category {
      padding: 20px 0;
    }

    .text {
      padding-bottom: 30px;
    }
  }
}
</style>
