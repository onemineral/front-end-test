<template>
  <div>
    <logo class="logo" />
    <h3>20% of your booking will support these organisations</h3>
    <separator class="separator" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Logo from "@/assets/icons/logo.svg";
import Separator from "@/assets/icons/separator.svg";

@Component({
  components: {
    Logo,
    Separator,
  },
})
export default class Introduction extends Vue {}
</script>

<style lang="scss" scoped>
.logo,
.separator {
  margin-bottom: 30px;
}

.logo {
  width: 3.5rem;
}

.separator {
  width: 2px;
}

h3 {
  font-size: 1.5rem;
  font-weight: normal;
  margin-bottom: 60px;
}
</style>
