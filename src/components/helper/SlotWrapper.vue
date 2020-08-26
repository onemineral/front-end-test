<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { VNode } from "vue";

@Component
export default class SlotWrapper extends Vue {
  @Prop() readonly value!: VNode | Array<VNode>;

  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  render(h: any): VNode {
    let nodes = this.value;

    if (!Array.isArray(nodes)) {
      nodes = [nodes];
    }

    return h("div", nodes);
  }
}
</script>
