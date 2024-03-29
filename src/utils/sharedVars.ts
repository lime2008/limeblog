import { ref } from 'vue';
var WINDOW_HEIGHT = 0;
WINDOW_HEIGHT = window.innerHeight
window.onresize = ()=>{
  WINDOW_HEIGHT = window.innerHeight
}

const lastScrollTop = ref(window.pageYOffset || document.documentElement.scrollTop);
const scrollMount = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop.value) {
      translate.value = 'translate(-50%,calc(-65px - 2.5vh))'
  } else {
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
const loading_show = ref(true)

export{
px,
translate,
loading_show
}