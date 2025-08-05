<template>

    <!--  系统顶栏-->
  
    <div class="system-header-top">
  
      <div class="logo">
  
        <img :src="require('@/assets/logo-image.png')" alt="logo" />
  
      </div>
  
      <right-condition  class="right-condition"></right-condition>
  
    </div>
  
  </template>
  
  <script>
  import rightCondition from './components/condition'
  export default {
    name: 'HeaderTop',
    components:
      { rightCondition }, data() { return {} }, props: {}, watch: {}
  }
  </script>
  
  <style scoped lang="scss">
  .system-header-top {
    * {
      box-sizing: border-box;
    }
  
    width: 100%;
    background: #eeeeee;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #909399;
  
    .logo {
      flex: 1;
      height: 36px;
  
      img {
        height: 100%;
        margin-left: 16px;
      }
    }
  
    .agv-robot {
      flex: 1;
    }
  
    .right-condition {
      flex: 1;
    }
  }
  </style>
  