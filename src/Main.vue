<script setup lang="ts">
import { translate } from './utils/sharedVars'
import './css/tab.css'
import { msg } from './utils/messageBox';
</script>
<template>

<div class="tab" style="color:#fff;" :style="{ transform: translate }">
    <div class="tab-card tab-left special_font" @click="console.log(msg.create('已经开放啦', 'suc'))">Home</div>
    <div class="tab-card special_font" @click="console.log(msg.create('暂未开放', 'error'))">Links</div>
    <div class="tab-card special_font"  @click="console.log(msg.create('暂未开放', 'error'))">About</div>
    <div class="tab-card tab-right special_font" @click="console.log(msg.create('暂未开放', 'error'))">Comment</div>
</div>
<router-view></router-view>
</template>

<style>

.fade_out_box{
    transition: opacity 0.5s ease;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease, transform 0.1s ease;
  
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

#message_container{
    position: fixed;
    bottom:10px;
    margin : auto;
    left: 50%;
    transform: translate(-50%,0);
}
.message_box_container{
    display: flex;
    
    flex-direction: column-reverse;
    flex-direction: column;
    flex-wrap: nowrap;
}
.message_box{
    min-width:125px;
    text-align: center;
    margin-bottom:10px;

    padding: 7.5px 15px;
    border-radius: 50px;
}
.error_box{
    border: solid #c45656 1px;
    background-color:  #fcd3d3;
    color: #f56c6c;
}
.suc_box{
    border: solid #529b2e 1px;
    background-color:  #e1f3d8;
    color:#579c34;
}
.tab-icon{
    height:30px;width: 30px;
    margin:auto;
    background-size: 100% 100%;
}
.icon_main{
    background-image: url(assets/main.svg);
}
.icon_msg{
    background-image: url(assets/main.svg);
}

         
</style> 
