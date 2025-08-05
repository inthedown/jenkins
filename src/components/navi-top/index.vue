<template>
  <div>
    <el-steps :active="1" simple>
      <el-step title="放置工件" icon=""><i class="far fa-pencil" /></el-step>
      <el-step title="选择焊缝类型" icon="el-icon-upload"></el-step>
      <el-step title="开始识别" icon="el-icon-picture"></el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
  name: "NaviTop",
  components: {},
  data() {
    return {};
  },
  mounted() {
    // console.log('App mounted');
  },
  methods: {},
  watch: {},
};
</script>

<style></style>
