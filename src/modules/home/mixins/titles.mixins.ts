import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({
  name: "titles-mixin"
})
export default class extends Vue {
  @Prop()
  title: string | undefined;
}
