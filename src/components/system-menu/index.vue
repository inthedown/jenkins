<template>
    <!--  系统左侧主菜单-->
    <div class="system-menu-cont">
      <el-menu
          :default-active="defaultActive"
          :router="true"
          text-color="#333"
          active-text-color="#D1272A"
          class="el-menu-vertical-demo">
        <el-menu-item v-for="item in pathItems" :index="item.url" :key="item.url" :disabled="item.disabled" @click="closeVehicleDrawer">
          <template slot="title">
            <div class="menu-item-icon">
              <i v-if="item.icon.startsWith('el')" :class="item.icon"></i>
              <i v-if="item.icon.startsWith('fa')"><font-awesome-icon :icon="item.icon" /></i>
            </div>
            <span class="menu-item-text">{{item.text}}</span>
          </template>
        </el-menu-item>
      </el-menu>
    </div>
    </template>
    
    <script>
    export default {
        name: 'SystemMenu-Index',
      props: {
      },
      data () {
        return {
          pathItems: [
            {
              url: '/home',
              icon: 'el-icon-s-home',
              disabled: false,
              text: '首页'
            },
            {
              url: '/about',
              icon: 'el-icon-s-tools',
              disabled: false,
              text: '配置'
            }
          ],
          defaultActive: ''
        }
      },
      watch: {
        $route: {
          handler (val) {
            let item = this.pathItems.find(item => val.path.indexOf(item.url) !== -1)
            if (item) {
              this.defaultActive = item.url
            }
          },
          immediate: true
        },
        slam: {
          handler (val) {
            this.pathItems.forEach(item => {
              item.disabled = val
            })
          }
        }
      },
      methods: {
        closeVehicleDrawer () {
       
        }
      }
    }
    </script>
    
    <style scoped lang="scss">
    .system-menu-cont{
      width: 65px;
      background: #eee;
      border-right: 1px solid #909399;
      .el-menu{
        background: #eee;
        width: 100%;
        border-right: 1px solid #909399;
        .el-menu-item{
          height: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 65px;
          background: #eee;
          line-height: normal;
          border-right: 1px solid #909399;
    
          i{
            font-size: 28px;
            color: #333;
          }
    
          .menu-item-text {
            margin-top: 10px;
          }
        }
        .is-active{
          //background: #000 !important;
          .menu-item-icon i {
            color: #D1272A;
          }
        }
      }
    }
    </style>
    