<script setup lang="ts">
import './css/tab.css'
import './css/message_box.css'
import { translate , loading_show } from './utils/sharedVars'
import { navigate } from './config'
import loading from './components/loading.vue'
//import { msg } from './utils/messageBox';
import { useRouter } from 'vue-router';
const router = useRouter();
</script>
<template>
<div class="tab" style="color:#fff;" :style="{ transform: translate }">
    <div v-for="(item, index) in navigate" class="tab_card special_font" @click="router.push({name:item.name})" :class="{ 'tab_left': index === 0 , 'tab_right' : index === navigate.length - 1}">{{ item.page }}</div>
</div>
<router-view></router-view>
<transition><loading v-if="loading_show"/></transition>
</template>

<style>

         
</style> 
