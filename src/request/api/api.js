import request from '@/request/request';
// 封装业务接口方法
const rest = {
  // 获取设备状态
  getDeviceStatus() {
    return request('/channel_read', {
      method: 'post',
      data: {
        "channel": "RestChannel",
        "node": "weld",
        "data": {
          "type": "devices_status"
        }
      }
    });
  },
  //启动相机流传输
  startImageWs() {
    return request('/channel_read', {
      method: 'post',
      data: {
        "channel": "RestChannel",
        "node": "weld",
        "data": {
          "type": "initial_image",
          "status": 1
        }
      }
    });
  },
  // 停止相机流传输
  stopImageWs() {
    return request('/channel_read', {
      method: 'post',
      data: {
        "channel": "RestChannel",
        "node": "weld",
        "data": {
          "type": "initial_image",
          "status": 0
        }
      }
    });
  },
  // 更多接口继续添加...
};

export default rest;