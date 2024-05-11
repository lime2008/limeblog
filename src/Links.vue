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
  <div class="image" :style="{ backgroundImage: 'url(' + config.links_style.image + ')' }">
		<header class="details" :style="{ color : config.links_style.color }" style="text-align: center;">
			<h1 class="entry-title" style="font-size: 40px;">{{ config.links_style.title }}</h1>
      <p>
        这儿里记载着建站以来与本站友好交换友链的伙伴们，欢迎常来看看常作客呀！
      </p>		</header>
	</div>
  <div class="content" style="padding: 20px 0;margin-bottom: 0;">
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
</div>

</template>

<style scoped>

.image::before {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.3);
	content: '';
}
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
.wrapper:nth-child(2) {
  margin-left: 0;
}
}


@media (max-width: 700px) {
.box{width:100%;}

}

.layer{
  align-content: center;
  padding:0 0 20px 0;
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
