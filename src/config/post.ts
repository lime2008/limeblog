interface Item {
    pid: string;
    file: string;
    image: string;
    thumb?: string;
    title: string;
    timestamp: number;
    preview: string;
    style?:{color? : string};
    lable?:{ key? : "daily" | "recommend" | "time", name: string }[]
}

const posts: Item[] = [
    { 
        pid: 'Composition_Template',
        file: './posts/2.md',
        thumb:'https://upload-bbs.miyoushe.com/upload/2024/05/10/336504708/4a3686ad1d63cd68a87f348f45a23f62_4627720057184579796.jpg?x-oss-process=image//resize,s_600/quality,q_80/auto-orient,0/interlace,1/format,jpg',
        image: 'https://upload-bbs.miyoushe.com/upload/2024/05/10/336504708/4a3686ad1d63cd68a87f348f45a23f62_4627720057184579796.jpg',
        title: '一些高中英语作文模板和范文！',
        preview: '应试教育的当下，英语学科作文也是越来越卷，想拿高分首先是需要字好看，我字又比较有特色，所以内容呈现就需要更加优秀和丰富。在这篇新博客的第二篇文章里，我整理出上学期一些模板语句以及我认为的比较有参考价值的范文，供自己记背，同时也分享出来了！A flood of tension welled up in her.The man stood there clumsily, embarrassment written on his red face.She felt nervous and uneasy, feeling like sitting on pins and needles.',
        timestamp: 1715664363,
        lable:[{key:'daily',name:'日常'}],
        style:{color:'#ffffff'}
    },
    {
        pid: 'A_New_Begining_Again',
        file: './posts/1.md',
        thumb:'https://upload-bbs.miyoushe.com/upload/2024/03/14/357876319/d4c31bd0260dac01a76f46ec17883b02_3825773577840391309.png?x-oss-process=image//resize,s_600/quality,q_80/auto-orient,0/interlace,1/format,png',
        image: 'https://upload-bbs.miyoushe.com/upload/2024/03/14/357876319/d4c31bd0260dac01a76f46ec17883b02_3825773577840391309.png',
        title: '博客搬家啦，是写在新博客的第一篇随笔！',
        preview: '众所周知博主已经断更很久很久了，很大一部分原因是因为高中学习生活真的很繁忙，并且在上学期就已经给了我当头一棒，现在回想起来初三的生活还是真的轻松，因为当时每天不仅可以玩游戏干啥啥，作业也不会很耽误。而高中朝七晚十的生活让我保持玩游戏的情况下睡眠严重不足，会导致第二天没精神，上课走神，作业也写不动，然后晚自习回家再继续写，如此恶性循环！啊要说这一片小随笔的话，是因为恰逢联考(又寄了)，中午休息时间长，偷偷写的，包括这个博客一开始重构也是开学考中午的心血来潮，那么来开启正题吧！虽然本篇随笔也不是为了记录什么，只是想庆祝一下博客小小搬迁！',
        timestamp: 1712654363,
        lable:[{key:'daily',name:'日常'}],
        style:{color:'#ffffff'}
    },
];
import daily from "../assets/edit-box-line.svg"
import recommend from "../assets/thumb-up-line.svg"
import time from "../assets/time.svg"
const lables = {
    daily : daily,
    recommend : recommend,
    time: time
}
export type { Item };
export { posts , lables };