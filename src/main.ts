import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import './style.css'
import App from './Main.vue'
import Home from './App.vue'
import Post from './Post.vue'
import NotFound from './NotFound.vue'
console.log("%c Originated by limeuwu %c https://www.lihouse.xyz/", "color: #fadfa3; background: #030307; padding:5px 0;", "background-image: linear-gradient(90deg, #fadfa3 0%, rgb(255, 255, 255) 100%); padding:5px 0;")
const routes = [
    { name: 'home' , path: '/', component: Home },
    { name: '404' , path: '/404', component: NotFound },
    { name: 'post' , path: '/post/:pid' , component: Post },
  ]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
router.beforeEach(async (to) => {
    if(to.matched.length === 0) return { name: '404'}
})
const app = createApp(App)
app.use(router)
app.mount('#app')
