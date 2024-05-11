<script setup lang="ts">
	import { useRoute , useRouter } from 'vue-router'
	import { formatTimestamp as formatter} from './utils/timeTransfer'
	import * as config from './entry_point';
	import generator from './utils/markdownGenerate'
	import { ref } from 'vue'
	import './css/common_page.css'
	const route = useRoute();
	var data : config.postType;
	import { onMounted } from 'vue';
	import monitor from './utils/imageMonitor'
	import { loading_show } from './utils/sharedVars'
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
	
	const findFileByPid = (al: config.postType[], currentPid: string): boolean => {
	    for (const item of al) {
	        console.log(item.pid, currentPid)
	        if (item.pid === currentPid) {
	            console.log(item)
	            data = item
	            return true
	        }
	    }
	
	    return false
	}
	
	const loadMarkdownFile = async (file : string) => {
	    const response = await fetch(file);
	    const markdownContent = await response.text();
	    return markdownContent
	}
	
	const translateFile = (markdownContent : string) => {
	    return generator.markdownToHtml(markdownContent);
	}
	
	const setup = async () => {
	    
	    const status = findFileByPid(config.posts , String(route.params.pid));
	    if(!status){
	        console.log('not found')
	        useRouter().push({name : '404'})
	        return
	    }
	    content.value = translateFile(await loadMarkdownFile(data.file));
	
	}
	const content = ref('')
	setup()
</script>
<template>
	<div class="image" :style="{ backgroundImage: 'url(' + data.image + ')' }">
		<header class="details" :style="{ color : (data.style?.color ? data.style?.color : 'black')}">
			<h1 class="entry-title">{{ data.title }}</h1>
			<p>发布于：{{ formatter(data.timestamp) }}{{ data.lable ? '  归档于：'+data.lable : '' }}</p>
		</header>
	</div>
	<div v-html="content" class="content">
	</div>
</template>
<style>
</style>