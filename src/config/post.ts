interface Item {
    pid: string;
    file: string;
    image: string;
    thumb?: string; // Making thumb optional
    title: string;
    timestamp: number;
    preview: string;
    style?:{color? : string};
    lable?:string;
}

const posts: Item[] = [
    {
        pid: 'A-New-Begining-Again',
        file: './posts/1.md',
        thumb:'https://upload-bbs.miyoushe.com/upload/2024/03/14/357876319/d4c31bd0260dac01a76f46ec17883b02_3825773577840391309.png?x-oss-process=image//resize,s_600/quality,q_80/auto-orient,0/interlace,1/format,png',
        image: 'https://upload-bbs.miyoushe.com/upload/2024/03/14/357876319/d4c31bd0260dac01a76f46ec17883b02_3825773577840391309.png',
        title: '博客搬家啦，是写在新博客的第一篇随笔！',
        preview: '众所周知博主已经断更很久很久了，很大一部分原因是因为高中学习生活真的很繁忙，并且在上学期就已经给了我当头一棒，现在回想起来初三的生活还是真的轻松，因为当时每天不仅可以玩游戏干啥啥，作业也不会很耽误。而高中朝七晚十的生活让我保持玩游戏的情况下睡眠严重不足，会导致第二天没精神，上课走神，作业也写不动，然后晚自习回家再继续写，如此恶性循环！啊要说这一片小随笔的话，是因为恰逢联考(又寄了)，中午休息时间长，偷偷写的，包括这个博客一开始重构也是开学考中午的心血来潮，那么来开启正题吧！虽然本篇随笔也不是为了记录什么，只是想庆祝一下博客小小搬迁！',
        timestamp: 0,
        lable:'日常',
        style:{color:'#ffffff'}
    },
   
];

export type { Item };
export { posts };