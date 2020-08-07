<template>
  <section>
    <header v-if="this.$slots.header">
      <slot name="header" />
    </header>
    <slot name="content" v-if="this.$slots.content" />
    <footer v-if="this.$slots.footer">
      <slot name="footer" />
    </footer>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
