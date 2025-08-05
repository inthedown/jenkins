<template>
    <div class="condition">
        <div class="condition-item">
       <svg xmlns="http://www.w3.org/2000/svg" class="styles__StyledSVGIconPathComponent-sc-i3aj97-0 ersNjW svg-icon-path-icon" viewBox="0 0 793.7 793.7" width="24" height="24"><defs></defs><g><defs> <style> .cls-1-UsCpw8msUsRCG0gPVZoc1v { fill: #2b79c2; } .cls-1-UsCpw8msUsRCG0gPVZoc1v, .cls-2-UsCpw8msUsRCG0gPVZoc1v { stroke-width: 0px; } .cls-2-UsCpw8msUsRCG0gPVZoc1v { fill: #3b4652; } </style> </defs> <path class="cls-1-UsCpw8msUsRCG0gPVZoc1v" d="m223.95,345.85l1.81.3c17.19,3.02,33.33,10.71,46.46,22.17,3.17,2.71,6.18,5.73,9.05,8.9l38.46-92.31,9.35-22.47c.75-.15,1.36-.3,2.11-.45,14.33-3.92,25.64-13.27,32.43-25.19s9.05-26.4,5.13-40.72c-1.36-4.68-3.17-9.2-5.58-13.12-12.07-20.21-36.5-30.92-60.33-24.43-28.51,7.84-45.4,37.26-37.56,65.91,1.36,5.28,3.62,10.11,6.33,14.48l-11.16,20.36-46.91,85.52c3.47.3,6.94.6,10.41,1.06h0Z"></path> <path class="cls-2-UsCpw8msUsRCG0gPVZoc1v" d="m599.52,207.99c.15,9.95-2.26,19.31-6.64,27.6-8.45,16.44-24.59,28.36-43.59,31.22-2.71.45-5.43.6-8.3.6-25.94.3-47.96-16.29-56.11-39.37h0l-21.57,1.51-75.87,5.58c4.98-14.18,5.58-29.56,1.51-44.5-.6-2.11-1.21-4.22-1.96-6.33l76.02,4.22,21.72,1.21c7.69-23.23,29.56-39.97,55.36-40.27,3.17,0,6.18.15,9.2.6,19,2.87,34.99,14.78,43.59,31.22,4.22,8.14,6.64,17.19,6.64,26.7Z"></path> <path class="cls-1-UsCpw8msUsRCG0gPVZoc1v" d="m608.11,165.46l33.64-36.05,50.68,50.23,24.89-25.19-46.15-56.41-33.94-41.48-33.18,35.45-38.16,40.72c17.35,5.73,32.28,17.35,42.23,32.73Z"></path> <path class="cls-1-UsCpw8msUsRCG0gPVZoc1v" d="m641.6,287.78l-33.64-36.05c-9.95,15.38-24.89,27-42.08,32.73l38.01,40.57,33.18,35.45,33.94-41.48,46.15-56.41-24.89-25.19-50.68,50.38Z"></path> <path class="cls-2-UsCpw8msUsRCG0gPVZoc1v" d="m589.11,560.79h-266.07v-119.61h-38.76c0-7.99-1.21-15.84-3.77-23.38-2.11-6.33-4.98-12.37-8.75-18.1-3.62-5.58-8.14-10.86-13.57-15.38-10.71-9.35-23.23-15.08-36.35-17.35h0c-6.64-1.21-13.42-1.51-20.06-.75-18.7,1.66-36.65,10.41-49.93,25.64-12.37,14.33-18.55,31.98-18.55,49.47h-38.46v263.2h494.28c39.67,0,71.8-32.13,71.8-71.8h0c0-39.67-32.13-71.95-71.8-71.95Zm-91.1,79.94H145.06c-5.88,0-10.56-4.68-10.56-10.56s4.68-10.56,10.56-10.56h352.95c5.88,0,10.56,4.68,10.56,10.56s-4.68,10.56-10.56,10.56Zm82.05,22.47c-16.89,0-30.62-13.73-30.62-30.62s13.73-30.62,30.62-30.62,30.62,13.73,30.62,30.62-13.73,30.62-30.62,30.62Z"></path></g></svg>
        <span>AGV Robot</span>
        </div>
        <div class="condition-item">
        <span class="iconfont icon-robot"></span>
        <span>AGV Robot</span>
        </div>
        <div class="condition-item">
        <span class="iconfont icon-robot"></span>
        <span>AGV Robot</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Condition-Index',
    components: {},
    props: {},
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
    watch: {}
}
</script>

<style>
.condition {
  display: flex; /* 容器内一行排列 */
  gap: 20px;     /* 项之间的间距，可根据需要调整 */
}

.condition-item {
  display: flex;       /* 图标和文字横向排列 */
  align-items: center; /* 垂直居中 */
  gap: 6px;            /* 图标与文字间距 */
  padding: 6px 10px;
  background-color: #f5f5f5;
  border-radius: 4px;
}

</style>