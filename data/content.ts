import type {
  HeroData,
  SkillsData,
  AboutData,
  ContactEntry,
  ProjectCategory,
  ContentItem,
} from "./types";

// Re-export types so existing imports keep working.
export type { ContactEntry, Project, ProjectCategory } from "./types";

// ─── Hero ────────────────────────────────────────────────────
export const heroData: HeroData = {
  greeting: "Hi, I'm Ai 姨",
  titles: ["An On-chain Data Analyst", "A Product Manager", "A Boba Fan"],
};

// ─── Skills ──────────────────────────────────────────────────
export const skillsData: SkillsData = {
  skills: "Smart Money, Market Maker, Whales, Insider, Weak Hands, Anything interesting on-chain",
  highlights: ["Anything", "interesting", "on-chain"],
};

// ─── About ───────────────────────────────────────────────────
export const aboutData: AboutData = {
  image: "/avatar.png",
  imageAlt: "Ai 姨头像",
  text: `Crypto is the antidote of APTX4869 💊
链上小说家，关心天气、食物、还有故事。`,
};

// ─── Contact ─────────────────────────────────────────────────
export const contactData: ContactEntry[] = [
  {
    type: "EVM",
    value: "EVM: 0xf01d33b7cbd31d341cd8317243a576c98d233019",
    href: "https://etherscan.io/address/0xf01d33b7cbd31d341cd8317243a576c98d233019",
  },
  {
    type: "Solana",
    value: "Solana: DM1J9iDhXgy8jHMsc4XGUhafv4FyyBLrRtresju5xtyG",
    href: "https://solscan.io/account/DM1J9iDhXgy8jHMsc4XGUhafv4FyyBLrRtresju5xtyG",
  },
  {
    type: "Bitcoin",
    value: "Bitcoin: bc1pc58mlfmgd226rujh93h5aaxgss3umsc6vyh9r4ss482qmj9vnwhs4u6zvm",
    href: "https://mempool.space/address/bc1pc58mlfmgd226rujh93h5aaxgss3umsc6vyh9r4ss482qmj9vnwhs4u6zvm",
  },
];

// ─── Work / Projects ─────────────────────────────────────────
export const projectCategories: ProjectCategory[] = [];

// ─── Content (replaces Work display) ─────────────────────────
export const contentCategories: ContentItem[] = [
  {
    title: "工具分享",
    description: "高效实现地址监控、聪明钱追踪等",
    url: "https://aiaptx.me/tool",
    links: [
      {
        text: "如何高效追踪巨鲸 / 实体的 Hyperliquid 地址群",
        href: "https://x.com/ai_9684xtpa/status/1970298304060882968",
      },
      {
        text: "那些能帮你躲过 Rug / 诈骗盘的 Memecoin 工具们",
        href: "https://x.com/ai_9684xtpa/status/1881987475968827404",
      },
      {
        text: "如何快速查看 Memecoin 24 小时内的巨鲸买入卖出",
        href: "https://x.com/ai_9684xtpa/status/1879457367676588425",
      },
      {
        text: "是什么项目将 ETH Gas 卷上去了",
        href: "https://x.com/ai_9684xtpa/status/1874475181223326064",
      },
      {
        text: "如何使用 DexScreener 展示地址的买卖点位",
        href: "https://x.com/ai_9684xtpa/status/1787734473666380094",
      },
      {
        text: "如何做到在一屏内监控多个 Meme 的 K 线",
        href: "https://x.com/ai_9684xtpa/status/1815218161060602008",
      },
      {
        text: "如何使用 Arkham 创建地址 / 代币监控",
        href: "https://x.com/ai_9684xtpa/status/1813116274475737112",
      },
      {
        text: "使用 MetaSuites 自定义地址标签",
        href: "https://x.com/ai_9684xtpa/status/1801074822442811716",
      },
      {
        text: "使用 impersonator 伪装成孙哥 / Vitalik 或任何感兴趣地址",
        href: "https://x.com/ai_9684xtpa/status/1797821577884799098",
      },
      {
        text: "安利五个好用且免费的工具，让你在 DYOR 时事半功倍",
        href: "https://x.com/ai_9684xtpa/status/1725106426778157255",
      },
    ],
  },
  {
    title: "干货分享",
    description: "一些链上教程、冷知识和小技巧",
    links: [
      {
        text: "以 MakerDAO 为例分享链上借贷产品的清算机制",
        href: "https://x.com/ai_9684xtpa/status/1906610943561458063",
      },
      {
        text: "如何挑选最适合自己的链上监控工具",
        href: "https://x.com/ai_9684xtpa/status/1792806341100396839",
      },
      {
        text: "手把手教你寻找 Alpha 内容（信息源 / 数据分析工具 / 监控工具）",
        href: "https://x.com/ai_9684xtpa/status/1714556145044787587",
      },
      {
        text: "如何查看巨鲸在 Meteora 的流动性分布，拿捏阴谋集团 / Dev / 聪明钱水面下的心理价位！",
        href: "https://x.com/ai_9684xtpa/status/1891333261324062878",
      },
      {
        text: "揭秘香蕉枪「首笔狙击」的秘密",
        href: "https://x.com/ai_9684xtpa/status/1742440642851270916",
      },
      {
        text: "如何定位到地址标签",
        href: "https://x.com/ai_9684xtpa/status/1719914438617440528",
      },
      {
        text: "做市商持有代币，就说明参与了做市吗？",
        href: "https://x.com/ai_9684xtpa/status/1847123642288951490",
      },
      {
        text: "美国政府 / 德国政府 / 门头沟地址汇总",
        href: "https://x.com/ai_9684xtpa/status/1808800547920883855",
      },
      {
        text: "清算相关那些简单却又实用的问题",
        href: "https://x.com/ai_9684xtpa/status/1783133030938501168",
      },
      {
        text: "TON 网络新手入门",
        href: "https://x.com/ai_9684xtpa/status/1771719440868282724",
      },
      {
        text: "币圈十五年，盘点代币发行方式的变迁",
        href: "https://x.com/ai_9684xtpa/status/1738383763820933455",
      },
    ],
  },
  {
    title: "数据洞察",
    description: "链上数据分析的精选内容",
    links: [
      {
        text: "为什么 $KMNO 和 $B2 的交易磨损低",
        href: "https://x.com/ai_9684xtpa/status/1919367199241953408",
      },
      {
        text: "BTC 40x 多单开出 5.68 亿仓位，近两个月合约获利 3878 万美元，James Wynn 到底是何方神圣？",
        href: "https://x.com/ai_9684xtpa/status/1924668031609012713",
      },
      {
        text: "在 $TRUMP 上赚麻的 TOP10 聪明钱们，近期 PVP 表现如何？",
        href: "https://x.com/ai_9684xtpa/status/1883797179061723428",
      },
      {
        text: "平台币之战终于来了 — 2024 年究竟各大交易所的平台币表现如何",
        href: "https://x.com/ai_9684xtpa/status/1872575892003881284",
      },
      {
        text: "币安 2024 年已上线 Memecoin 项目盘点",
        href: "https://x.com/ai_9684xtpa/status/1855799519235223558",
      },
      {
        text: "Coinbase 2024 年已上线 Memecoin 项目盘点",
        href: "https://x.com/ai_9684xtpa/status/1866367898501206452",
      },
      {
        text: "近五年来 12.20 - 01.06 圣诞假期下 BTC 和纳斯达克指数的涨跌表现",
        href: "https://x.com/ai_9684xtpa/status/1871089629564481807",
      },
      {
        text: "从币安上币视角，看 Pump.fun 在 Meme 发射平台赛道的护城河",
        href: "https://x.com/ai_9684xtpa/status/1862686954393149692",
      },
      {
        text: "美国政府砸盘 1 万枚 BTC，市场仅用四个小时消化抛压并收回跌幅？",
        href: "https://x.com/ai_9684xtpa/status/1863792992294957108",
      },
      {
        text: "SOL 的增发和销毁情况",
        href: "https://x.com/ai_9684xtpa/status/1857037856788664622",
      },
      {
        text: "Meme 牛市，谁是最大赢家？BananaGun 分红机制解析",
        href: "https://x.com/ai_9684xtpa/status/1845355318131425312",
      },
      {
        text: "BTC ATH 之后的每一次 Lido 连续净流出都对应着大盘下跌",
        href: "https://x.com/ai_9684xtpa/status/1824000227344572925",
      },
      {
        text: "孙哥一直在买以太，为什么 $ETH 就是不涨呢？",
        href: "https://x.com/ai_9684xtpa/status/1804343749927145537",
      },
    ],
  },
  {
    title: "概念科普",
    description: "热门项目或概念的通俗版介绍",
    links: [
      {
        text: "Sonic & Shadow 神矿爆火的原因，相关概念，及其 x(3,3) 机制工作原理",
        href: "https://x.com/ai_9684xtpa/status/1892860232281551123",
      },
      {
        text: "一个半小时市值 42 亿！$TRUMP (OFFICIAL TRUMP) 完整版筹码解析",
        href: "https://x.com/ai_9684xtpa/status/1880459915841663194",
      },
      {
        text: "总统夫人代币 $MELANIA 重点梳理",
        href: "https://x.com/ai_9684xtpa/status/1881145818335633619",
      },
      {
        text: "$Swarms 生态热度拉满，或对标下一个 ai16z 生态？",
        href: "https://x.com/ai_9684xtpa/status/1875820330490724692",
      },
      {
        text: "大家都是狗，凭什么你 $CHILLGUY 能四天千倍？",
        href: "https://x.com/ai_9684xtpa/status/1859557663232897342",
      },
      {
        text: "小孩哥当 DEV - $Quant 发行与起飞的完整故事线",
        href: "https://x.com/ai_9684xtpa/status/1859156924136370284",
      },
      {
        text: "一文梳理 Meme 代币 $SPX(SPX6900) 的前世今生",
        href: "https://x.com/ai_9684xtpa/status/1844302523966029958",
      },
      {
        text: "Memecoin $MAGA 基本介绍 / 持仓分布 / 聪明钱成本 / 老鼠仓地址",
        href: "https://x.com/ai_9684xtpa/status/1795024427345748001",
      },
    ],
  },
  {
    title: "做市商",
    description: "热门做市商及其公开做市项目",
    url: "https://aiaptx.me/mm",
  },
];
