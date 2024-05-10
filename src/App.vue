<script setup lang="ts">
	import * as config from './entry_point';
	import { onMounted } from 'vue';
	import { loading_show , WINDOW_WIDTH } from './utils/sharedVars'
	import { ref } from 'vue';
	import monitor from './utils/imageMonitor'
	import { formatTimestamp as formatter} from './utils/timeTransfer'
	import { px } from './utils/sharedVars'
	import './css/common_header.css'
	import './css/post_list.css'
	onMounted(()=>{
	  loadMorePosts();
	  img_monitor();
	})
	const img_monitor = () => {
	  monitor.monitorImageLoadProgress().then(progress => {
	      console.log('Image load progress:', progress);
	      console.log('加载成功');
	      setTimeout(() => {
	        loading_show.value = false
	      }, 500);
	    }).catch(error => {
	      console.error('Error:', error);
	    });
	}
	const moreShow = ref(true)
	const loadedPosts = ref<config.postType[]>([]); 
	const postsPerPage = 2; 
	const startIndex = ref(0);
	const loadMorePosts = () => {
	  loading_show.value = true;
	  setTimeout(() => {
	    const endIndex = Math.min(startIndex.value + postsPerPage, config.posts.length);
	    if (endIndex > startIndex.value) {
	      loadedPosts.value = [...loadedPosts.value, ...config.posts.slice(startIndex.value, endIndex)];
	      startIndex.value = endIndex;
	    }
	    if (endIndex >= config.posts.length) {
	      moreShow.value = false;
	    }
	    img_monitor();
	  }, 300);
	
	};
	
</script>
<template>
	<div class="header">
		<div class="avatar" :style="{ backgroundImage: 'url(' + config.info.avatar + ')' }"></div>
		<div class="info">
			<h2 class="special_font">{{ config.info.blog }}</h2>
			<p class="special_font">{{ config.info.description }}</p>
			<a href="https://www.lihouse.xyz/old.html" style="color:white;">
				<p class="common_txt">老版博客全部功能正常，请戳我访问！</p>
			</a>
			<div class="social_media" style="margin-top:10px;">
				<a v-for="item in config.info.items" :href="item.url" target="_blank">
					<div class="icon_mask">
						<div class="icon" :style="{ backgroundImage: 'url(' + item.logo + ')' }"></div>
					</div>
				</a>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="post">
			<article v-for="post in loadedPosts" class="article" v-if="(WINDOW_WIDTH < 700)">
				<router-link :to="'/post/' + post.pid" class="article_content">
					<div class="thumb">
						<div class="thumb_img" :style="{ backgroundImage: 'url(' + (post.thumb ? post.thumb : post.image) + ')' }"></div>
					</div>
					<div class="quick_read">
						<h3>{{ post.title }}</h3>
						<div class="quick_content">
							<p>{{ post.preview }}</p>
							<div class="insight">
								<p>发布于：{{ formatter(post.timestamp) }}{{ (post.lable ? ' 归档于：'+post.lable : '') }}</p>
							</div>
						</div>
					</div>
				</router-link>
			</article>
			<article v-for="(post, index) in loadedPosts" class="article" v-if="(WINDOW_WIDTH > 700)">
				<router-link :to="'/post/' + post.pid">
					<div v-if="index % 2 == 0" class="article_content">
						<div class="thumb">
							<div class="thumb_img thumb_left" :style="{ backgroundImage: 'url(' + (post.thumb ? post.thumb : post.image) + ')' }"></div>
						</div>
						<div class="quick_read quick_read_right">
							<h3>{{ post.title }}</h3>
							<div class="quick_content">
								<p>{{ post.preview }}</p>
								<div class="insight">
									<p>发布于：{{ formatter(post.timestamp) }}{{ (post.lable ? ' 归档于：'+post.lable : '') }}</p>
								</div>
							</div>
						</div>
					</div>
					<div v-if="index % 2 !== 0" class="article_content">
						<div class="quick_read quick_read_left">
							<h3>{{ post.title }}</h3>
							<div class="quick_content">
								<p>{{ post.preview }}</p>
								<div class="insight">
									<p>发布于：{{ formatter(post.timestamp) }}{{ (post.lable ? ' 归档于：'+post.lable : '') }}</p>
								</div>
							</div>
						</div>
						<div class="thumb">
							<div class="thumb_img thumb_right" :style="{ backgroundImage: 'url(' + (post.thumb ? post.thumb : post.image) + ')' }"></div>
						</div>
					</div>
				</router-link>
			</article>
			<div v-if="moreShow" @click="loadMorePosts()" class="pagination">加载更多</div>
		</div>
	</div>
	<div ref="parallaxElement" class="background" :style="{ backgroundImage: 'url(' + config.info.background + ')' , transform: `translateY(-${px}px)` }"></div>
</template>
<style scoped>
	.pagination{
	  padding: 13px 35px;
	  width:175px;
	  text-align: center;
	  margin:30px auto 0 auto;
	  /*border: 1px solid #D6D6D6;*/
	  border-radius: 50px;
	  background-color: #ffffff;
		box-shadow: 0 0 10px #8989891a;
	  color: #666;
	}
</style> ./entry_point