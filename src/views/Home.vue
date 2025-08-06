<template>
  <div v-if="!allDevicesConnected" class="image-info">
    连接设备
  </div>
  <div v-else>
    <div class="camera-view">
      <navi-top class="navi-top"></navi-top>
      <message-card type="primary" message="请将工件放置在相机虚线框中" class="message-card"></message-card>
      <div class="image">
        <img v-if="cameraImage" :src="`data:image/jpeg;base64,${cameraImage}`" alt="Camera Image" class="bg-img" />
        <div v-else class="image-info">暂无图像</div>
        <!-- 中间虚线框 -->
        <div class="dashed-guide-box">
          <!-- 底部文字 -->
          <div class="guide-text">移动工件到虚线框内</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import deviceStatus from '@/store/deviceStatus';
import naviTop from "@/components/navi-top/index.vue";
import MessageCard from "@/components/message-card/index.vue";
export default {
  name: "Home-Index",
  components: { naviTop, MessageCard },
  data() {
    return {
      socket: null,
      status: null,
      cameraImage: null
    };
  },
  computed: {
    statusText() {
      switch (this.status) {
        case 0: return '结束'
        case 1: return '进行中'
        case 2: return '异常'
        default: return '未知'
      }
    },
    statusClass() {
      return {
        running: this.status === 1,
        done: this.status === 0,
        error: this.status === 2
      }
    },
    allDevicesConnected() {
      return deviceStatus.armStatus === '正常' && deviceStatus.cameraStatus === '正常' && deviceStatus.welderStatus === '正常';
    }
  },
  mounted() {
    console.log(this.allDevicesConnected);

    if (this.allDevicesConnected) {
      
          this.connectWebSocket();
     

    }
  },
  beforeDestroy() {
    if (this.socket) {
      this.socket.close()
    }
  },
  methods: {
    connectWebSocket() {
      // const wsUrl = 'ws://192.168.4.30:54321/ws'
      const wsUrl = 'ws://localhost:54321/ws'

      this.socket = new WebSocket(wsUrl)

      this.socket.onopen = () => {
        console.log('WebSocket 连接已建立')
      }

      this.socket.onmessage = event => {
        try {
          const msg = JSON.parse(event.data)
          const data = msg.data || {}

          this.status = data.status
          this.cameraImage = data.camera_image
        } catch (e) {
          console.error('解析消息失败:', e)
        }
      }

      this.socket.onerror = err => {
        console.error('WebSocket 错误:', err)
      }

      this.socket.onclose = () => {
        console.log('WebSocket 连接关闭')
      }
    }
  }
}
</script>


<style scoped>
.camera-view {
  position: relative;
  width: 100%;
  height: calc(100vh - 74px);
  /* 或者你需要的高度 */
  overflow: hidden;
}

/* .status {
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
}

.status.running {
  color: green;
}

.status.done {
  color: blue;
}

.status.error {
  color: red;
}

.image img {
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  z-index: -999;
}*/
.image-info {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 18px;
  z-index: 1;
  white-space: nowrap;
}

.message-card {
  width: 80%;
  margin: 0 auto;
  margin-top: 12px;
}

.navi-top {
  width: 80%;
  margin: 0 auto;
  background-color: #ffffff;
  border-bottom: 1px solid #eee;
}

.image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.background-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.no-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 1;
}

.navi-top,
.message-card,
.status {
  position: relative;
  z-index: 2;
  /* 确保在图像之上 */
}

.bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* 等比例填充，可能溢出 */
  object-position: center;
  /* 居中裁剪 */
  display: block;
}

/* 中间虚线框 */
.dashed-guide-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  /* 修改成你想要的虚线框宽度 */
  height: 400px;
  /* 修改成你想要的虚线框高度 */
  transform: translate(-50%, -50%);
  border: 4px dashed #ffdd01;
  /* 白色虚线边框 */
  border-radius: 10px;
  box-sizing: border-box;
  z-index: 2;
  /* 确保在图像上方 */
  pointer-events: none;
  /* 不干扰鼠标点击 */
}

/* 底部文字 */
.guide-text {
  position: absolute;
  bottom: 10px;
  /* 文字距离虚线框底边25px */
  left: 50%;
  transform: translateX(-50%);
  color: #ffdd01;
  font-size: 14px;
  white-space: nowrap;
  user-select: none;
  pointer-events: none;
}
</style>