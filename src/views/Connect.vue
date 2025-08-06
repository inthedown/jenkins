<template>
    <div class="connect-container">
        <el-card class="connect-card">
            <div slot="header" class="card-header"><span class="required-star">*</span>焊接系统 IP</div>
            <el-form :model="form" label-position="top">
                <el-form-item>
                    <el-input v-model="form.ip" placeholder="请输入要连接系统IP地址" />
                </el-form-item>
                <el-button :loading="loading" class="connect-btn" @click="handleConnect">连接</el-button>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import deviceStatus from '@/store/deviceStatus';
import { EventBus } from '@/plugin/event-bus';

export default {
    name: 'ConnectCard',
    data() {
        return {
            form: {
                ip: ''
            },
            loading: false
        };
    },
    methods: {
        handleConnect() {
            this.$emit('connect', this.form.ip);
            //存储到localStorage
            this.loading = true;
            localStorage.setItem('device_ip', this.form.ip + ':54320');
            this.$rest.getDeviceStatus().then(res => {
                console.log(res.data);
                const data = res.data ? res.data : {};
                console.log(data.camera_status);
                const isSuccess =
                    data.camera_status === true &&
                    data.robot_status === true &&
                    data.weld_status === true;

                const { robot_status, camera_status, weld_status } = res.data;

                deviceStatus.armStatus = robot_status ? '正常' : '断开';
                deviceStatus.cameraStatus = camera_status ? '正常' : '断开';
                deviceStatus.welderStatus = weld_status ? '正常' : '断开';

                if (isSuccess) {
                    this.$message.success('连接成功');
                    this.$router.push('/home');
                    EventBus.$emit('device-ip-updated', this.form.ip);

                } else {
                    this.$message.error('设备状态异常，请检查连接');
                }
            }).catch(err => {
                this.$message.error('连接失败，请检查IP地址或网络');
                console.error('连接错误:', err);
            }).finally(() => {
                this.loading = false;
            });
        }
    }
};
</script>

<style scoped>
.connect-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    /* 垂直居中 */
    justify-content: center;
    /* 水平居中 */
    overflow: hidden;
    /* 防止内容溢出 */
    box-sizing: border-box;
    /* 计算内边距 */
}

.connect-card {
    width: 320px;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.card-header {
    font-size: 16px;
    font-weight: bold;
}

.connect-btn {
    background-color: #D1272A;
    /* 红色 */
    color: white;
    /* 白色文字 */
    width: 100%;
}

.required-star {
    color: #D1272A;
    margin-left: 4px;
    margin-right: 4px;

    font-size: 18px;
    vertical-align: middle;
    font-weight: bold;
}
</style>
