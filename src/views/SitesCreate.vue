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
          @click="onLoadJson"
          >Load Data</el-button
        >
      </el-button-group>

      <div class="formatJson" v-if="isDataLoaded">
        <div>
          <h1>Format Json</h1>
        </div>
        <el-form :model="form">
          <template v-for="item in cleanJson.schema">
            <template v-if="item.isGroup">
              <el-col :span="24">{{ item.label }}</el-col>
              <el-col
                :span="11"
                v-for="(child, index) in item.children"
                :key="item.name"
              >
                <el-form-item>
                  <input
                    @change="onInputChange($event, item.label, child.name)"
                    :placeholder="child.placeholder"
                    ref="input"
                    class="el-input__inner"
                  ></input>
                </el-form-item>
              </el-col>
            </template>
            <template v-else>
              <el-col :span="11">
                <el-form-item>
                  <el-input
                    v-model="form[item.name]"
                    :placeholder="item.placeholder"
                    clearable
                  ></el-input>
                </el-form-item>
              </el-col>
            </template>
          </template>
              <el-col :span="11">
                <el-form-item>
                  <el-button @click="onSubmit">Submit</el-button>
                </el-form-item>
                <el-form-item>
                  <el-button @click="clearForm">Clear Form</el-button>
                </el-form-item>
              </el-col>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import { UserModule } from "@/store/modules/user";
import { CategoriesModule } from "@/store/modules/categories";
import { TodosModule } from "@/store/modules/todos";
import { SitesModule } from "../store/modules/sites";

export default (Vue as VueConstructor<
  Vue & {
    $refs: {
      jsondata: HTMLInputElement;
    };
  }
>).extend({
  data: () => {
    return {
      form: {},
      rawJson: "",
      currVal: "",
      cleanJson: {
        headers: [""],
        schema: [{}],
        data: {}
      },
      isDataPasted: false,
      isDataLoaded: false
    };
  },
  methods: {
    clearForm() {
      for (const key in this.form) {
        if (typeof (this.form as { [key: string]: any })[key] === "string") {
          (this.form as { [key: string]: any })[key] = "";
        }
        if (typeof (this.form as { [key: string]: any })[key] === "object") {
          for (const subKey in (this.form as { [key: string]: any })[key]) {
            (this.form as { [key: string]: any })[key][subKey] = "";
          }
        }
      }
      Array.prototype.map.call(
        this.$refs.input,
        (input: any) => (input.value = "")
      );
    },
    onSubmit() {
      if ((this.form as { [key: string]: any })["id"] != "") {
        SitesModule.createSite(this.form)
          .then(res => {
            if (!res.success) {
              console.error("NO Result");
              throw new Error("Thrown Error");
            }
            // this.$router.push({
            //   name: "site-show",
            //   params: { siteName: (this.form as { [key: string]: any })["id"] }
            // });
            this.clearForm();
          })
          .catch(error => {
            console.error("from catch error", error);
          });
      } else {
        alert("must have id");
      }
    },
    onInputChange(evt: any, formKey: string, formKeyChild: string) {
      this.$set(
        (this.form as { [key: string]: any })[formKey],
        formKeyChild,
        evt.target.value
      );
    },
    onLoadJson() {
      try {
        let jsonData = JSON.parse(this.rawJson);
        this.rawJson = "";
        this.isDataPasted = false;
        jsonData instanceof Array ? (jsonData = jsonData[0]) : null;
        this.parseRawJson(jsonData);
      } catch (error) {
        this.rawJson = "";
        this.isDataPasted = false;
        console.error(error);
        alert("Data must be an Array or Object");
      }
    },
    parseRawJson(data: {}) {
      this.cleanJson.data = data;
      this.cleanJson.headers = Object.keys(data);
      this.cleanJson.schema = this.buildJsonSchema(data);
      data = {};
      this.isDataLoaded = true;
    },
    buildJsonSchema(obj: { [index: string]: any }) {
      let schema: any[] = [];
      for (const key in obj) {
        if (typeof obj[key] === "string") {
          let newKey = key.replace(/\s+/, "").trim();
          let def: { [index: string]: any } = {};
          def[newKey] = "";
          this.form = Object.assign({}, this.form, def);
          def["fieldType"] = "TextInput";
          def["isGroup"] = false;
          def["label"] = key;
          def["placeholder"] = key;
          def["label"] = key;
          def["name"] = key;
          schema.push(def);
        }
        if (typeof obj[key] === "object") {
          let newKey = key.replace(/\s+/, "").trim();
          let formKey: { [key: string]: any } = {};
          formKey[newKey] = {};
          this.form = Object.assign({}, this.form, formKey);
          let def: { [index: string]: any } = {};
          def["label"] = key;
          def["isGroup"] = true;
          def["children"] = [];
          for (const subKey in obj[key]) {
            let childDef: { [index: string]: any } = {};
            let childKey: { [key: string]: any } = {};
            formKey[newKey][subKey] = "";
            childDef["fieldType"] = "TextInput";
            childDef["label"] = subKey;
            childDef["placeholder"] = subKey;
            childDef["label"] = subKey;
            childDef["name"] = subKey;
            def["children"].push(childDef);
          }
          schema.push(def);
        }
      }
      return schema;
    },
    onChange() {
      if (this.rawJson != null) {
        this.isDataPasted = !this.isDataPasted;
      } else {
        console.log("On change => No data");
      }
    },
    onPaste(evt: any) {
      const {
        target: { value }
      } = evt;
      if (this.rawJson != null || "") {
        this.isDataPasted = true;
      }
    },
    onClearData() {
      this.rawJson = "";
      this.isDataPasted = false;
    }
  }
});
</script>

<style scoped>
</style>