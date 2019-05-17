<template>
  <div class="el-input">
    <input
      type="text"
      :name="name"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :placeholder="placeholder"
      class="el-input__inner"
    />
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: ["placeholder", "lable", "name", "value"]
})
export default class TextInput extends Vue {}
</script>

<style lang="scss" scoped>
</style>