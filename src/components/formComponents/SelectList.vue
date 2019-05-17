<template>
  <el-select v-model="data" :multiple="multi" @change="onChange($event)">
    <el-option
      v-for="option in options"
      :key="option"
      :label="option"
      :value="option"
    >
    </el-option>
  </el-select>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({})
export default class SelectList extends Vue {
  @Prop() multi!: boolean;
  @Prop() options: any;
  @Prop() name!: string;
  @Prop() label!: string;
  @Prop() value: any;
  data = "";
  onChange(evt: any) {
    this.$emit("input", evt);
  }
}
</script>

<style lang="scss" scoped>
</style>