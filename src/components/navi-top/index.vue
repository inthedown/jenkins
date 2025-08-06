<template>
  <div class="navi-top">
    <el-steps :active="1" simple>
      <el-step title="放置工件" icon="el-icon-edit"></el-step>
      <el-step title="选择焊缝类型" icon="el-icon-circle-check"></el-step>
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

<style>
.navi-top {
  width: 80%;
  background-color: #ffffff;
  border-bottom: 1px solid #eee;
  margin: 0 auto;
}
</style>
