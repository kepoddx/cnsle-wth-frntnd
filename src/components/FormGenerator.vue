<template>
  <div>
    <component
      v-for="(field, index) in schema"
      :key="index"
      :is="field.fieldType"
      :value="formData[field.name]"
      @input="updateForm(field.name, $event)"
      v-bind="field"
    >
    </component>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import NumberInput from "./formComponents/NumberInput.vue";
import SelectList from "./formComponents/SelectList.vue";
import TextInput from "./formComponents/TextInput.vue";

@Component({
  components: { NumberInput, SelectList, TextInput }
})
export default class FormGenerator extends Vue {
  @Prop() value: any;
  @Prop() schema: any;

  formData: any;

  created() {
    this.formData = this.value || {};
  }
  updateForm(fieldName: string, value: any) {
    this.$set(this.formData, fieldName, value);
    this.$emit("input", this.formData);
  }
}
</script>

<style lang="scss" scoped>
</style>