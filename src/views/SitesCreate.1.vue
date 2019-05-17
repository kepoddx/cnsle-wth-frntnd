<template>
  <div>
    <div class="read el-textarea">
      <textarea
        ref="jsondata"
        type="textarea"
        placeholder="Paste Json Object Here"
        v-model="rawJson"
        @change="onChange"
        @blur="onPaste"
        @paste="onPaste"
        clearable
        class="el-textarea__inner"
      >
      </textarea>
    </div>
    <div class="jsonFormControls">
      <el-button-group>
        <el-button
          type="primary"
          :disabled="!isDataPasted"
          @click="onClearData"
          icon="el-icon-error"
          >Clear Data</el-button
        >
        <el-button
          type="primary"
          :disabled="!isDataPasted"
          icon="el-icon-circle-plus"
          >Load Data</el-button
        >
      </el-button-group>
    </div>
    <el-form> </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { UserModule } from "@/store/modules/user";
import { CategoriesModule } from "@/store/modules/categories";
import { TodosModule } from "@/store/modules/todos";

@Component({})
export default class SiteCreate extends Vue {
  form: Object = {};
  rawJson: any = "";
  isDataPasted = false;

  $refs!: Vue["$refs"] & {
    jsondata: HTMLFormElement;
  };

  get name() {
    return UserModule.name;
  }
  get all() {
    return UserModule.fullName;
  }
  get catLength() {
    return CategoriesModule.catLength;
  }

  get activeTodosCount() {
    return TodosModule.activeTodosCount;
  }

  get todo() {
    return TodosModule.todoById;
  }

  readRawJson() {}
  onChange() {
    if (this.rawJson != null) {
      this.isDataPasted = !this.isDataPasted;
      console.log("On change => Data pasted");
    } else {
      console.log("On change => No data");
    }
  }
  onPaste() {
    const data = this.$refs.jsondata.value;
    console.log("data", data);
    if (this.rawJson != null || "") {
      this.isDataPasted = true;
      console.log("onPaste => Data pasted");
    } else {
      console.log("No data", this.rawJson);
    }
  }
  onClearData() {
    this.rawJson = "";
    this.isDataPasted = false;
  }
}
</script>

<style scoped>
</style>