<script setup lang="ts">
import { translate } from './utils/sharedVars'
// 在其他文件中使用 msg 对象生成提示框
// 在其他文件中使用 msg 对象生成提示框
import { msg } from './utils/messageBox';
</script>
<template>

<div class="tab" style="color:#fff;" :style="{ transform: translate }">
    <div class="tab-card tab-left special_font" @click="msg.create('This is an error message', 'error');">Home</div>
    <div class="tab-card special_font">Links</div>
    <div class="tab-card special_font">About</div>
    <div class="tab-card tab-right special_font">Comment</div>
</div>
<router-view></router-view>
</template>

<style>

.fade_out_box{
    transition: opacity 0.1s ease;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
.message_box_container{
    display: flex;
    position: fixed;
    top:10px;
    flex-direction: column;
    flex-wrap: nowrap;
}
.message_box{
    
  top:10px;
padding: 10px;
  border-radius: 5px;
}
.error_box{
    border: solid #c45656 1px;
    background-color:  #fcd3d3;
    color: #f56c6c;
}
.suc_box{
    border: solid #529b2e 1px;
    background-color:  #e1f3d8;
    color:#95d475;
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

            .tab {
                transition: transform 0.3s ease;
                z-index:9999;
                position: fixed;
                top:10px;
                font-size:20px;
                left:50%;
                transform: translate(-50%,0);
                background: rgba(17, 2, 2, 0.565);  
                box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);  
                backdrop-filter: blur(8px);  
                -webkit-backdrop-filter: blur(8px);  
                border-radius: 10px;
                display:flex;
            }
            .tab-card{
                text-align: center;
                padding-top: 10px;
                padding-bottom: 5px;
                width: 25%;
                pointer-events: auto;
                transition: 0.2s;
            }
            .tab-card:hover{
                color: #393939;
                transition: 0.2s;
                background-color: #00deff;
                
            }
            .tab-left{
                border-top-left-radius: 10px;
                border-bottom-left-radius: 10px;
            }
            .tab-right{
                border-top-right-radius: 10px;
                border-bottom-right-radius: 10px;
            }
            @media (min-width: 550px){
                .tab{
                    width: 38%;
                }
            }
            @media (max-width: 550px){
                .tab{
                    width: 85%;
                }
            }
            @media (max-width: 1000px){
                .tab{
                    width: 90%;
                }
            }
</style> 
