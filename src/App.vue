<template>
  <div id="app">
    <header-top class="header"></header-top>
    <div class="main">
      <aside class="sidebar">
         <system-menu></system-menu>
        <!-- <el-menu  mode="vertical" default-active="1" class="el-menu-vertical">
          <el-menu-item index="1">
            <router-link to="/home">
              <i class="el-icon-s-home"></i>
              <span slot="title">首页</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/about">
              <i class="el-icon-setting"></i>
              <span slot="title">设置</span>
            </router-link>
          </el-menu-item>
        </el-menu> -->

       <!-- <ul>
          <li><router-link to="/home">首页</router-link></li>
          <li><router-link to="/about">关于</router-link></li>
        </ul>  -->
      </aside>
      <section class="content">
        <router-view />
      </section> 
    </div>
  </div>
</template>

<script>
import HeaderTop from "./components/header-top/index.vue";
import SystemMenu from "./components/system-menu/index.vue";
export default {
  name: "App",
  components: {
    HeaderTop,
    SystemMenu,
  },
};
</script>

<style  lang="scss" scoped>
// 去除白边   
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #ffffff;
}


#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #ffffff;
}

/* 顶部导航栏 */
.header {
  height: 74px;
  color: white;
  display: flex;
  align-items: center;
  font-size: 24px;
}

/* 中间区域：侧边栏 + 内容 */
.main {
  flex: 1;
  display: flex;
  overflow: hidden;
}

/* 侧边栏 */
.sidebar {
  width: 64px;
  background-color: #eeeeee;
  color: #fff;
  padding-top: 10px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

/* Element UI 菜单样式 */
.el-menu-vertical {
  border-right: none;
  background-color: #eeeeee;
  color: #bfcbd9;
}
.el-menu-vertical .el-menu-item {
  color: #bfcbd9;
}
.el-menu-vertical .el-menu-item.is-active {
  background-color: #eeeeee;
  color: #409EFF;
}

/* 内容区 */
.content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: #f5f7fa;
}
</style>

