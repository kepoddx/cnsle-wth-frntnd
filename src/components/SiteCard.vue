<template>
  <div>
    <router-link :to="{ name: 'site-show', params: { siteId: site.id } }">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>{{ site.siteName }}</span>
          <el-button style="float: right; padding: 3px 0" type="text"
            >Operation button</el-button
          >
        </div>
        <div class="text item">
          {{ site.website }}
          <BaseIcon name="users" />
        </div>
      </el-card>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({})
export default class HelloWorld extends Vue {
  @Prop() site: any;
}
</script>

<style lang="scss" scoped>
</style>