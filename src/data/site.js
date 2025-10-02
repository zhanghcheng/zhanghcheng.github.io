export const profile = {
    name: '程章昊',
    title: 'Undergraduate @ Nanjing Agricultural University · AI / Graduate @ SouthEast University · Computer Science',
    summary: '机器学习方向，做过病害分级、票房预测、操作系统模拟等，关注“模型到系统”的落地。硕士阶段聚焦于大模型应用，知识图谱的融合与推理。',
    location: 'Nanjing, China',
    photo: '/images/photo.jpg', // 放到 /public/images/avatar.jpg
    links: [
        { text: 'Email', href: 'mailto:chenghao@stu.njau.edu.cn' },
        { text: 'GitHub', href: 'https://github.com/zhanghcheng' }
    ]
}

export const news = [
    { date: '2025-05', text: '病害分级一体化系统阶段性成果完成，论文已在线发表（Frontiers in Plant Science 方向， SCIⅡ区）。' },
    { date: '2025-04', text: '票房预测平台完成端到端打通（采集→特征→建模→可视化）。' },
    { date: '2024-12', text: '完成基于 Java 多线程的操作系统模拟项目（调度/内存/中断）。' },
    { date: '2024-04', text: '蓝桥杯（Python A 组）江苏省一等奖、全国三等奖。' }
]

export const publications = [
    {
        title: 'Potato Late Blight Severity Grading via Integrated Detection & Segmentation',
        authors: 'Chenghao Cheng*, Advisor*, et al.',
        venue: 'Frontiers in Plant Science (under review), 2025',
        links: [
            { text: 'Paper', href: 'https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2025.1616864' },
            // { text: 'Code', href: '#' }
        ],
        badges: ['YOLOv8', 'UNet3+', 'MSLRA Attention'],
        thumb: '/images/potato.png',
        desc: '叶片检测 + 病斑分割 + 严重度计算一体化；在参数下降的同时，精确率+6%、召回率+3%。'
    }

]

export const projects = [
    {
        thumb: '/images/os.png',
        title: '操作系统模拟（Java 并发）',
        when: '2024.09 – 2024.12',
        desc: '实现进程调度（MLFQ）、请求分页内存管理与中断处理，采用 ReentrantLock/BlockingQueue 等并发机制。',
        links: []
    },
    {
        thumb: '/images/movie.png',
         // 放占位图至 public/images/
        title: '票房预测系统',
        when: '2025.02 – 2025.04',
        desc: 'Scrapy/Requests 采集 + 文本特征（jieba/Skip-Gram） + XGBoost 建模；Flask + Vue3 平台化训练/监控/预测。',
        links: [
            { text: "code", href: 'https://gitlab.com/cai8380535/ml' },
        ]
    }
]

export const footer = '© 2025 Chenghao · Built with Vue'
