interface Item {
    pid: string;
    file: string;
    image: string;
    thumb?: string; // Making thumb optional
    title: string;
    timestamp: number;
    preview: string; // Add the preview property
}

const posts: Item[] = [
    {
        pid: 'A-New-Begining-Again',
        file: './posts/1.md',
        image: 'https://static.codemao.cn/whale/BkhARDRcT',
        title: '测试文章',
        preview: '正如标题，世界你好，这是新版博客中的第一篇文章！它正式写于1.19号，创建于1.17号，经过三上岸！',
        timestamp: 0
    },
    {
        pid: 'A-New-Begining-Again',
        file: './posts/1.md',
        image: 'https://static.codemao.cn/whale/BkhARDRcT',
        title: '测试文章',
        preview: '正如标题，世界你好，这是新版博客中的第一篇文章！它正式写于1.19号，创建于1.17号，经过三上岸！',
        timestamp: 0
    },
    {
        pid: 'A-New-Begining-Again',
        file: './posts/1.md',
        image: 'https://static.codemao.cn/whale/BkhARDRcT',
        title: '测试文章',
        preview: '正如标题，世界你好，这是新版博客中的第一篇文章！它正式写于1.19号，创建于1.17号，经过三上岸！',
        timestamp: 0
    },
    {
        pid: 'A-New-Begining-Again',
        file: './posts/1.md',
        image: 'https://static.codemao.cn/whale/BkhARDRcT',
        title: '测试文章',
        preview: '正如标题，世界你好，这是新版博客中的第一篇文章！它正式写于1.19号，创建于1.17号，经过三上岸！',
        timestamp: 0
    },
    {
        pid: 'A-New-Begining-Again',
        file: './posts/1.md',
        image: 'https://static.codemao.cn/whale/BkhARDRcT',
        title: '测试文章',
        preview: '正如标题，世界你好，这是新版博客中的第一篇文章！它正式写于1.19号，创建于1.17号，经过三上岸！',
        timestamp: 0
    },
];

export type { Item };
export { posts };