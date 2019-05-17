<template>
  <div>
    {{ site }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { SitesModule } from "../store/modules/sites";

@Component({})
export default class SiteShow extends Vue {
  @Prop() siteId!: string;
  site: Object = {};

  created() {
    SitesModule.fetchSite(this.siteId)
      .then(site => {
        this.site = site;
      })
      .catch(error => console.error(error));
  }
}
</script>

<style scoped>
</style>