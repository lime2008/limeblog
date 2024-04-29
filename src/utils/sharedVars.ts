import { ref } from 'vue';
const WINDOW_HEIGHT = ref(0);
const WINDOW_WIDTH = ref(0);
WINDOW_HEIGHT.value = window.innerHeight
WINDOW_WIDTH.value = window.innerWidth
window.onresize = ()=>{
  WINDOW_HEIGHT.value = window.innerHeight
  WINDOW_WIDTH.value = window.innerWidth
}
const site_show = ref(true);
const lastScrollTop = ref(window.pageYOffset || document.documentElement.scrollTop);
const scrollMount = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop.value) {
      translate.value = 'translate(-50%,calc(-65px - 2.5vh))'
  } else {
      translate.value = 'translate(-50%,0)'
    }
  if(scrollTop < WINDOW_HEIGHT.value) {
    const moveLimit = WINDOW_HEIGHT.value * 0.2;
    px.value = moveLimit * (document.documentElement.scrollTop / document.documentElement.clientHeight)
  }
  lastScrollTop.value = scrollTop;
}

window.addEventListener('scroll',scrollMount);
const translate = ref('translate(-50%,0)')
const px = ref(0)
const loading_show = ref(true)

export{
site_show,
px,
translate,
loading_show,
WINDOW_WIDTH,
}