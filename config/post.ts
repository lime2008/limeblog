interface Item {
    pid: string;
    file: string;
    image: string;
    thumb?: string; // Making thumb optional
    title: string;
    timestamp: number;
    preview: string;
    style?:{color? : string};
}

const posts: Item[] = [
    {
        pid: 'A-New-Begining-Again',
        file: './posts/1.md',
        image: 'https://upload-bbs.miyoushe.com/upload/2024/03/14/357876319/d4c31bd0260dac01a76f46ec17883b02_3825773577840391309.png?x-oss-process=image//resize,s_600/quality,q_80/auto-orient,0/interlace,1/format,png',
        title: '测试文章',
        preview: '正如标题，世界你好，这是新版博客中的第一篇文章！它正式写于1.19号，创建于1.17号，经过三上岸！',
        timestamp: 0,
        style:{color:'#fff'}
    },
   
];

export type { Item };
export { posts };