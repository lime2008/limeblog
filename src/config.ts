const blog = 'LIMEUWU'
const author = 'limeuwu'
const url = 'https://www.lihouse.xyz/'
const description = 'Puis-je prétendre à un miracle '
const background = 'https://cdn-community.codemao.cn/47/community/d2ViXzMwMDFfNDk3MDQ3Ml8wXzE2NzEwODc3MTQ3MTRfNWNhMDJiYTM.png'
//const background = 'https://cdn-community.codemao.cn/47/community/d2ViXzMwMDFfNzY5ODg3OV8wXzE3MDkyNjY5Njg5ODdfOGUxOGFmYWY.jpeg';
import bili from "./assets/bilibili.svg"
import netease from "./assets/netease.svg"
import github from "./assets/github.svg"
import avatar from "./assets/headimg_dl.jpg"
const items = [
    {logo: netease, url: 'https://music.163.com/#/user/home?id=1969897039'},
    {logo: bili, url: 'https://space.bilibili.com/525187695'}, 
    {logo: github, url: 'https://github.com/lime2008'},
]
const navigate = [
    {page: 'Home', name: 'home'},
   // {page: 'Links', name: 'links'},
   // {page: 'About', name: 'about'},
]
import { posts as postsFromPostTs } from './post.ts';
import { Item as Type } from './post.ts';
export type { Type }; 
export{
    blog,
    postsFromPostTs,
    background,
    author,
    description,
    url,
    items,
    avatar,
    navigate
}
