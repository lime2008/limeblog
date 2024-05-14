<script setup lang="ts">
	import * as config from './entry_point';
	import { onMounted , ref } from 'vue';
	import { getElementSize as sizeGetter} from './utils/getElementSize'
	import { loading_show } from './utils/sharedVars'
	import './css/common_header.css'
	const height = ref('0px');
	onMounted(()=>{
	  height.value = sizeGetter('details').height + 140 + 'px';
	  setTimeout(() => {
	        loading_show.value = false
	      }, 500);
	})
</script>

<template>

	<div class="layer">
		<div class="image" :style="{ backgroundImage: 'url(' + config.links_style.image + ')' , height : height}">
			<header id="details" class="details" :style="{ color : config.links_style.color }" style="text-align: center;">
				<h1 class="entry-title" style="font-size: 40px;">{{ config.links_style.title }}</h1>
				<p>
					{{ config.links_style.des }}
				</p>
			</header>
		</div>
		<div class="content" style="padding: 20px 0;margin-bottom: 0;">
			<div class="wrapper">
				<div class="display">
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
				<p style="margin:10px 0 20px 0;">已经隐匿于人海的朋友们:</p>
				<div class="display">
					<div v-for="link in config.brokens" class="box">
						<a :href=link.url target="_blank" class="link_detail">
							<div class="link_description">
								<h4>{{ link.name }}</h4>
								<p>{{ link.brief }}</p>
							</div>
						</a>
					</div>
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
		background-color: rgba(0, 0, 0, 0.2);
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
	.box{width:calc(50% - 10px);}
	.box:nth-child(2n-1) {
	  margin-right:10px;
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
	.display{
	  display: flex;
	  flex-wrap: wrap;
	}
	.wrapper{
	  margin: 0 auto;
	  margin-top: 10px;
	  width:90%;
	  max-width:1200px;
	}
	.box{
	  background-color: #ffffff;
	  border-radius: 5px;
	}
</style>
