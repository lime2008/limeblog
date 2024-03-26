<script setup lang="ts">
import * as config from './config';
import { onMounted , ref  } from 'vue';
import monitor from './utils/image_monitor'
import { px } from './utils/sharedVars'
import loading from './components/loading.vue'
import './css/common_header.css'
import { useRouter } from 'vue-router';
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
const router = useRouter();
</script>

<template>
<transition><loading v-if="loadingShow"/></transition>
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
<div class="post" @click="router.push({name:'post'})">
  <router-link :to="'/post/' + 'A-New-Begining-Again'">
  <article class="article"  itemtype="contentUrl">
		<div class="thumb">
		<div class="thumb_img" :style="{ backgroundImage: 'url(https://static.codemao.cn/whale/BkhARDRcT)' }"  alt="密码保护：记带三小只夜登嵩顶失败😂【图】;"></div>
		
		</div><!-- thumbnail--> 
    <div class="quick_read">
      <h3>1111正如标题，世正如标题，世正如标题，世正如标题，世正如标题，世正如标题，世正如标题，世正如标题，世正如标题，世正如标题，世1111111111</h3>
     <p> 正如标题，世界你好，这是新版博客中的第一篇文章！它正式写于1.19号，创建于1.17号，经过三天奋战，自己写的博客程序可以投入正常使用了！
      
关于接下来网站相关的事，我没有过多考虑，也许是头两天因为网课即将结束，激动冲昏了头脑，整天埋在上面，还没写作业，搞得现在写这篇文章的我此时此刻内心有点..嘛.. 所以，我争取荔枝后半个寒假努力学习，不过年后确实没我好日子过了，恐怕这个寒假也是最后一个能见到我大活人的阶段了————

既然是第一篇文章，也不存在标题，标签之类内容方向的束缚，我要不再推个广告吧

看我动态的小伙伴们肯定知道自己也在重构一个暑假写的社区(做了一半不想再shit上雕花了)，它的网址是https://sq.lihouse.xyz/ 万花筒社区，属furry向，同时呢，我也在收集，单项收录furry向网站在社区首页展示，但可能本博客的受众不会有合符标准的网站

另外，值得一提的是本站是由vite+vue3+ts写的，我对ts的评价是“一言难尽”，感觉千变万化，反正特别6，但效率也高了很多，不仅仅是ts的写法，打包速度是真的快，搞得我社区也想重写了

写在最后，作为站长，很高兴你能读到最后一行字，更为准确地说，是有耐心踏寻本站！同时日期也临近春节，我也预祝你新年快乐，心想事成！

写在最最后，祝自己中考顺利，能成功上岸！</p>
    </div>
	</article>
</router-link>


</div>
<div ref="parallaxElement" class="background" :style="{ backgroundImage: 'url(' + config.background + ')' , transform: `translateY(-${px}px)` }"></div>
</template>
<style scoped>

</style> 
