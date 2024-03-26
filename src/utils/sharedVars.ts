import { ref } from 'vue';
var WINDOW_HEIGHT = 0;
WINDOW_HEIGHT = window.innerHeight
window.onresize = ()=>{
  WINDOW_HEIGHT = window.innerHeight
}

const lastScrollTop = ref(window.pageYOffset || document.documentElement.scrollTop);
const scrollMount = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

// 判断滚动方向
if (scrollTop > lastScrollTop.value) {
  // 向下滚动
  translate.value = 'translate(-50%,-60px)'
} else {
  // 向上滚动
  translate.value = 'translate(-50%,0)'
}

  if(scrollTop < WINDOW_HEIGHT) {
    const moveLimit = WINDOW_HEIGHT * 0.2;
    px.value = moveLimit * (document.documentElement.scrollTop / document.documentElement.clientHeight)
  }
  lastScrollTop.value = scrollTop;
}

window.addEventListener('scroll',scrollMount);
const translate = ref('translate(-50%,0)')
const px = ref(0)


export{
px,
translate
}