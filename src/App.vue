<script setup lang="ts">
import * as config from './config';
import { onMounted } from 'vue';
import { loading_show } from './utils/sharedVars'
import { ref } from 'vue';
import monitor from './utils/imageMonitor'
import { px } from './utils/sharedVars'
import './css/common_header.css'
import './css/post_list.css'
onMounted(()=>{
  loadMorePosts();
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
const moreShow = ref(true)
const loadedPosts = ref<config.Type[]>([]); 
const postsPerPage = 2; 
const startIndex = ref(0);
const loadMorePosts = () => {
  const endIndex = Math.min(startIndex.value + postsPerPage, config.postsFromPostTs.length);
  if (endIndex > startIndex.value) {
    loadedPosts.value = [...loadedPosts.value, ...config.postsFromPostTs.slice(startIndex.value, endIndex)];
    startIndex.value = endIndex;
  }
  if (endIndex >= config.postsFromPostTs.length) {
    moreShow.value = false; // No more posts to load, hide the load more button
  }
};

</script>

<template>
<div class="header">
  <div class="avatar" :style="{ backgroundImage: 'url(' + config.avatar + ')' }"></div>
  <div class="info">
    <h2 class="special_font">{{ config.blog }}</h2>
    <p>{{ config.description }}</p> 
    <a href="https://www.lihouse.xyz/old.html" style="color:white;"><p class="common_txt">老版博客全部功能正常，请戳我访问！</p></a>
    <div class="social_media" style="margin-top:10px;">
    <a v-for="item in config.items" :href="item.url" target="_blank">
    <div class="icon_mask"><div class="icon" :style="{ backgroundImage: 'url(' + item.logo + ')' }"></div></div>
    </a>
  </div>
</div>
</div>
<div class="container">
<div class="post">
  <article v-for="post in loadedPosts" style="margin-top: 35px;">
    <router-link :to="'/post/' + post.pid" class="article">
		<div class="thumb">
      <div class="thumb_img" :style="{ backgroundImage: 'url(' + (post.thumb ? post.thumb : post.image) + ')' }"></div>
		</div>
    <div class="quick_read">
      <h3>{{ post.title }}</h3>
     <p>{{ post.preview }}</p>
    </div>
  </router-link>
	</article>
  <div v-if="moreShow" @click="loadMorePosts()" class="pagination">加载更多</div>
</div>
</div>
<div ref="parallaxElement" class="background" :style="{ backgroundImage: 'url(' + config.background + ')' , transform: `translateY(-${px}px)` }"></div>
</template>
<style scoped>
.pagination{
  padding: 13px 35px;
  width:20%;
  text-align: center;
  margin:30px auto 0 auto;
  border: 1px solid #D6D6D6;
  border-radius: 50px;
  background-color: #fafafa;
	box-shadow: 0 0 10px #8989891a;
  color: #ADADAD;
}
</style> 
