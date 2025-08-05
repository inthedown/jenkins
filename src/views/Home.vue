<template>
  <div>
    <navi-top></navi-top>
  </div>
</template>

<script>
import naviTop from "@/components/navi-top/index.vue";
export default {
  name: "Home-Index",
  components: { naviTop },
  data() {
    return {
      message: "Welcome to the Home Page!",
    };
  },
  mounted() {
    console.log(this.message);
  },
};
</script>

<style></style>
