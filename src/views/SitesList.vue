<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="4">
        <h1>Site Listing</h1>
      </el-col>
      <el-col :span="12">
        <div>
          <h4>Site Count: {{ siteCount ? siteCount : 0 }}</h4>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="6" v-for="(o, index) in sites" :key="o.siteName">
        <SiteCard :site="o" />
      </el-col>
      <el-col>
        <template v-if="page != 1">
          <router-link :to="{ name: 'sites', query: { page: page - 1 } }">
            <el-button type="primary" icon="el-icon-arrow-left"
              >Previous Page</el-button
            >
          </router-link>
        </template>
        <router-link
          v-if="hasNextpage"
          :to="{ name: 'sites', query: { page: page + 1 } }"
        >
          <el-button type="primary"
            >Next Page<i class="el-icon-arrow-right el-icon-right"></i
          ></el-button>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import SiteCard from "@/components/SiteCard.vue";
import { SitesModule } from "@/store/modules/sites";

@Component({
  components: { SiteCard }
})
export default class SitesList extends Vue {
  sites = [];
  sitesTotal = 0;
  perPage = 3;

  created() {
    SitesModule.fetchSites({ perPage: this.perPage, page: this.page }).then(
      (payload: any) => {
        this.sites = payload.sites;
        this.sitesTotal = payload.sitesTotal;
      }
    );
  }

  get page() {
    return parseInt(this.$route.query.page as any) || 1;
  }
  get siteCount() {
    return this.sites.length;
  }
  get hasNextpage() {
    return this.sitesTotal > this.page * this.perPage;
  }
}
</script>
<style lang="scss" scoped>
.el-col {
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>