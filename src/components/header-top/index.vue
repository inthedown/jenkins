<template>

  <!--  系统顶栏-->

  <div class="system-header-top">

    <div class="logo">

      <img :src="require('@/assets/logo-image.png')" alt="logo" />

    </div>

    <right-condition v-if="showDeviceStatus" class="right-condition"></right-condition>

  </div>

</template>

<script>
import rightCondition from './components/condition'
import { EventBus } from '@/plugin/event-bus';

export default {
  name: 'HeaderTop',
  components:
    { rightCondition }, 
    data() {
      return {
        deviceIp: localStorage.getItem('device_ip')
      }
    }, props: {}, watch: {
    }, computed: {
      showDeviceStatus() {
        console.log(localStorage.getItem('device_ip'));
        return this.deviceIp !== null;
      }
    },
    mounted() {
      EventBus.$on('device-ip-updated', (newIp) => {
        this.deviceIp = newIp;
        console.log('HeaderTop received new IP:', this.deviceIp);
      });
    }
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
      margin-left: 14px;
    }
  }

  .agv-robot {
    flex: 1;
  }

  .right-condition {
    margin-right: 20px;
  }
}
</style>