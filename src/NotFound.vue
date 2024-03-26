<script setup lang="ts">
import * as config from './config';
import { onMounted , ref } from 'vue';
import monitor from './utils/imageMonitor'
import loading from './components/loading.vue'
import './css/common_header.css'
const loadingShow = ref(true)
onMounted(()=>{
  monitor.monitorImageLoadProgress().then(progress => {
      console.log('Image load progress:', progress);
      console.log('加载成功');
      setTimeout(() => {
        loadingShow.value = false
      }, 500);
    }).catch(error => {
      console.error('Error:', error);
    });
})

</script>

<template>
<transition><loading v-if="loadingShow"/></transition>
<div class="header">
  <div class="info" style="text-align: center;">
    <h1 class="special_font">XWX</h1>
    <h2 class="special_font">404 NOT FOUND</h2>
    <p>你貌似来到了时间线的尽头</p>
  </div>
</div>

<div class="background" :style="{ backgroundImage: 'url(' + config.background + ')' }"></div>

</template>

<style scoped>


</style> 
./utils/imageMonitor