<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import Layout from "./components/Layout.vue";

export default {
  components: {
    Layout
  }
};
</script>
<style lang="scss">
body,
html {
  padding: 0;
  margin: 0;
}
#app {
  height: 100vh;
  .leftSidebar {
    border-right: solid 1px #e6e6e6;
    .el-menu {
      border: none;
    }
  }
}
.hamburger-container {
  line-height: 46px;
  height: 100%;
  float: left;
  cursor: pointer;
  transition: background 0.3s;
  -webkit-tap-highlight-color: transparent;
  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
}
.el-header.navbar {
  height: 50px !important;
  overflow: hidden;
  position: relative;
  padding: 0 5px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.el-container.layout {
  height: 100vh !important;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100vh;
}
</style>
