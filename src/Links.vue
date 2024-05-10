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
      setTimeout(() => {
        loading_show.value = false
      }, 500);
    });
})
</script>

<template>

<div class="layer">
  <div class="wrapper">
  <div v-for="link in config.links" class="box">
  <a :href=link.url target="_blank" class="link_detail">
    <div class="link_avatar" :style="{ backgroundImage: 'url(' + link.image + ')' }"></div>
    <div class="link_description">
    <h4>{{ link.name }}</h4>
    <p>{{ link.brief }}</p>
    </div>
  </a>
  </div>
</div>
</div>

<div class="background" :style="{ backgroundImage: 'url(' + config.info.background + ')' }"></div>

</template>

<style scoped>
.link_description{
  margin-left:10px;
  width:calc(100% - 58px);
}

.link_avatar{
  border-radius: 50%;
  width:48px;
  height:48px;
  border-radius: 50%;
	background-position: 50%;
	background-size: cover;
	background-repeat: no-repeat;
}
.link_description > p {
  font-size:14px;
}
.link_detail{
  width:100%;
  color: #666;
  display: flex;
  align-items: center;
  padding:0.5px;
}
@media (min-width: 700px) {
.box{width:calc(50% - 10px);
margin-left:10px;}
}
.layer{
  align-content: center;
  padding:calc(45px + 4vh) 0 20px 0;
  background-color: rgba(255, 255, 255, 0.2);
}

.box{
  
  padding: 10px;
    background: #fff;
    margin-bottom: 12.5px;
    align-content: center;
    display: flex;
    flex-wrap: nowrap;
    border-radius: 4px;
    border: 1px solid #e4ecf3;
    cursor: pointer;
}
.wrapper{
  margin: 0 auto;
  display: flex;
  margin-top: 10px;
  flex-wrap: wrap;
  width:90%;
  max-width:1200px;
}
.box{
  background-color: #ffffff;
  border-radius: 5px;
}

</style> 
