<template>
  <div>
    <form-generator :schema="schema" v-model="formData"> </form-generator>
    <p>
      Hello {{ formData.title }} {{ formData.firstName }}
      {{ formData.lastName }}, I hear you are {{ formData.age }} years old.
    </p>
  </div>
</template>

<script>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import FormGenerator from "./FormGenerator.vue";

@Component({
  components: { FormGenerator },
  data: () => {
    return {
      formData: {
        firstName: "keith"
      },
      schema: [
        {
          fieldType: "SelectList",
          name: "title",
          multi: false,
          label: "Title",
          options: ["", "Mr", "Ms", "Mx", "Dr", "Madam", "Lord"]
        },
        {
          fieldType: "TextInput",
          placeholder: "First Name",
          label: "First Name",
          name: "firstName"
        },
        {
          fieldType: "TextInput",
          placeholder: "Last Name",
          label: "Last Name",
          name: "lastName"
        },
        {
          fieldType: "NumberInput",
          placeholder: "Age",
          label: "Age",
          name: "age",
          min: 0,
          max: 10,
          num: 0
        }
      ]
    };
  }
})
export default class DynamicForm extends Vue {}
</script>

<style lang="scss" scoped>
</style>