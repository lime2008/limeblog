<script setup lang="ts">
import * as config from './entry_point';
import { onMounted } from 'vue';
import monitor from './utils/imageMonitor'
import { loading_show } from './utils/sharedVars'
import './css/common_header.css'
onMounted(()=>{
  monitor.monitorImageLoadProgress().then(progress => {
      console.log('Image load progress:', progress);
      console.log('加载成功');
      setTimeout(() => {
        loading_show.value = false
      }, 500);
    }).catch(error => {
      console.error('Error:', error);
    });
})



</script>

<template>
<div class="header">
  <div class="info" style="text-align: center;">
    <h1 class="special_font">XWX</h1>
    <h2 class="special_font">404 NOT FOUND</h2>
    <p>你貌似来到了时间线的尽头</p>
  </div>
</div>

<div class="background" :style="{ backgroundImage: 'url(' + config.info.background + ')' }"></div>

</template>

<style scoped>


</style> 
./utils/imageMonitor./entry_point