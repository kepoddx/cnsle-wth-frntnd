<template>
  <el-container class="layout">
    <el-aside class="leftSidebar" :style="leftSidebar" :width="width">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">Navigator One</span>
          </template>
          <el-menu-item-group>
            <span slot="title">Group One</span>
            <el-menu-item index="1-1"
              ><router-link :to="{ name: 'home' }"
                >Home</router-link
              ></el-menu-item
            >
            <el-menu-item index="1-1"
              ><router-link :to="{ name: 'about' }">About</router-link>
            </el-menu-item>
            <el-menu-item index="1-1"
              ><router-link :to="{ name: 'sites' }">Sites</router-link>
            </el-menu-item>
            <el-menu-item index="1-1"
              ><router-link :to="{ name: 'sites-create' }">Create</router-link>
            </el-menu-item>
            <el-menu-item index="1-1"
              ><router-link :to="{ name: 'test' }">Test</router-link>
            </el-menu-item>

            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">item four</span>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="navbar">
        <Hamburger
          id="hamburger-container"
          class="hamburger-container"
          :is-active="!isCollapse"
          @toggleClick="isCollapse = !isCollapse"
        />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Hamburger from "./Hamburger.vue";

@Component({
  components: { Hamburger }
})
export default class Layout extends Vue {
  @Prop() private msg!: string;
  data() {
    return {
      isCollapse: true,
      width: "200",
      leftSidebar: {}
    };
  }
  toggleSidebar() {
    console.log("clicked");
  }
  handleOpen(key: any, keyPath: any) {
    console.log(key, keyPath);
  }
  handleClose(key: any, keyPath: any) {
    console.log(key, keyPath);
  }
}
</script>
<style lang="scss">
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(200px);
}
</style