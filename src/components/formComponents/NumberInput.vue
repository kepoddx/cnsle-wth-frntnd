<template>
  <el-input-number
    v-model="data"
    :min="min"
    :max="max"
    :value="value"
    :placeholder="placeholder"
    controls-position="right"
    @input="$emit('input', $event)"
  >
  </el-input-number>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  props: ["placeholder", "label", "name", "min", "max", "num", "value"]
})
export default class NumberInput extends Vue {
  created() {
    this.data = this.value;
  }
}
</script>

<style lang="scss" scoped>
</style>