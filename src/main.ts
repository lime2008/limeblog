import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { loading_show , site_show } from './utils/sharedVars'
import './style.css'
import App from './Main.vue'
import Home from './App.vue'
import Post from './Post.vue'
import Links from './Links.vue'
import NotFound from './NotFound.vue'
console.log("%c Originated by limeuwu %c https://www.lihouse.xyz/", "color: #fadfa3; background: #030307; padding:5px 0;", "background-image: linear-gradient(90deg, #fadfa3 0%, rgb(255, 255, 255) 100%); padding:5px 0;")
const routes = [
    { name: 'home' , path: '/', component: Home },
    { name: '404' , path: '/404', component: NotFound },
    { name: 'post' , path: '/post/:pid' , component: Post },
    { name: 'links' , path: '/links' , component: Links },
    { name: 'about' , path: '/about' , component: Post },
  ]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

router.beforeEach((to, _from, next) => {
    loading_show.value = true;
    if (to.matched.length === 0) {
      next({ name: "404" });
    } else {
      const nextRoute = () => {
        next();
      };
      setTimeout(nextRoute, 300);
    }
    if(to.name === '404') site_show.value = false
    else site_show.value = true
  });
const app = createApp(App)
app.use(router)
app.mount('#app')
