<script setup lang="ts">
    import './css/tab.css'
    import './css/message_box.css'
    import * as config from './entry_point';
    import { translate , loading_show , site_show  } from './utils/sharedVars'
    import loading from './components/loading.vue'
    //import { msg } from './utils/messageBox';
    import { useRouter } from 'vue-router';
    const router = useRouter();
</script>
<template>
    <div class="tab" style="color: #fff;" :style="{ transform: translate }">
        <div v-for="(item, index) in config.navigate" class="tab_card special_font" @click="router.push({name:item.name})" :class="{ 'tab_left': index === 0 , 'tab_right' : index === config.navigate.length - 1}">{{ item.page }}</div>
    </div>
    <router-view></router-view>
    <transition>
        <loading v-show="loading_show" />
    </transition>
    <div class="site_info" v-if="site_show">
        <p class="special_font">COPYRIGHT © 2022-2024 {{ config.info.blog }}</p>
    </div>
</template>
<style>
    .site_info {
        padding: 20px 0 20px 0;
        color: #666;
        text-align: center;
        background-color: #ffffff;
    }
</style>
