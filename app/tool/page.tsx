"use client";

import { useMemo, useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { Table, Tag, Input, Segmented, Space } from "antd";

type Tool = {
  name: string;
  categories: string[];
  pricing: "免费" | "部分付费" | "付费";
  url: string;
};

const tools: Tool[] = [
  { name: "Arkham", categories: ["代币监控", "地址可视化", "地址监控"], pricing: "免费", url: "https://auth.arkm.com/register?ref=Aiaptx" },
  { name: "Nansen", categories: ["代币监控", "地址监控"], pricing: "部分付费", url: "https://nsn.ai/aiaptx" },
  { name: "Hyperdash", categories: ["Hyperliquid"], pricing: "免费", url: "https://hyperdash.com/join/aiaptx" },
  { name: "Hyperbot", categories: ["Hyperliquid"], pricing: "部分付费", url: "https://hyperbot.network?ic=6792001762" },
  { name: "GMGN", categories: ["Meme", "代币监控", "地址监控"], pricing: "免费", url: "https://gmgn.ai/r/0ZhKy06I?chain=bsc" },
  { name: "Debot", categories: ["Meme", "代币监控", "地址监控"], pricing: "免费", url: "https://debot.ai?inviteCode=174084" },
  { name: "Chainbot", categories: ["地址监控"], pricing: "部分付费", url: "https://chainbot.io/" },
  { name: "Ave.ai", categories: ["Meme"], pricing: "免费", url: "https://ave.ai/" },
  { name: "DexScreener", categories: ["Meme"], pricing: "免费", url: "https://dexscreener.com/" },
  { name: "Pumpscam", categories: ["Meme"], pricing: "部分付费", url: "https://pumpscam.com/mintCode?r=qhrqee" },
  { name: "MetaSleuth", categories: ["地址可视化"], pricing: "付费", url: "https://metasleuth.io/" },
  { name: "MistTrack", categories: ["地址可视化"], pricing: "部分付费", url: "https://dashboard.misttrack.io/" },
  { name: "Bubblemaps", categories: ["地址可视化"], pricing: "免费", url: "https://v2.bubblemaps.io" },
  { name: "Ultra Sound Money", categories: ["Gas"], pricing: "免费", url: "https://ultrasound.money/" },
  { name: "Etherscan Gastracker", categories: ["Gas"], pricing: "免费", url: "https://etherscan.io/gastracker" },
  { name: "TradingView", categories: ["K线", "宏观数据", "技术分析"], pricing: "部分付费", url: "https://www.tradingview.com/pricing/?share_your_love=Aiaptx" },
  { name: "SosoValue", categories: ["宏观数据"], pricing: "免费", url: "https://sosovalue.com/join/ZZ445UZ7" },
  { name: "DeFILama", categories: ["宏观数据"], pricing: "免费", url: "https://defillama.com/" },
  { name: "Money Printer", categories: ["宏观数据"], pricing: "免费", url: "https://cryptofees.info/" },
  { name: "The Block", categories: ["宏观数据"], pricing: "免费", url: "https://www.theblock.co/data" },
  { name: "Coinglass", categories: ["清算"], pricing: "免费", url: "https://www.coinglass.com/zh/liquidations" },
  { name: "DeFi Saver", categories: ["清算"], pricing: "免费", url: "https://app.defisaver.com/" },
  { name: "EigenPhi", categories: ["MEV"], pricing: "免费", url: "https://eigenphi.io/" },
];

const desiredCategoryOrder = [
  "代币监控",
  "地址监控",
  "Hyperliquid",
  "Meme",
  "地址可视化",
  "宏观数据",
  "技术分析",
  "清算",
  "K线",
  "Gas",
  "MEV",
] as const;

const categoryColors: Record<string, string> = {
  代币监控: "rgba(161, 64, 65, 0.5)", // A14041
  地址监控: "rgba(236, 124, 61, 0.5)", // EC7C3D
  Hyperliquid: "rgba(254, 249, 233, 1)", // FEF9E9
  Meme: "rgba(202, 193, 184, 0.5)", // CAC1B8
  地址可视化: "rgba(135, 110, 95, 0.5)", // 876E5F
  宏观数据: "rgba(157, 197, 201, 0.5)", // 9DC5C9
  技术分析: "rgba(87, 63, 61, 0.5)", // 573F3D
  清算: "rgba(69, 39, 36, 0.5)", // 452724
  "K线": "rgba(229, 229, 229, 0.5)", // E5E5E5
  Gas: "rgba(197, 197, 197, 0.5)", // C5C5C5
  MEV: "rgba(113, 145, 147, 0.5)", // 719193
};

const allCategories = [...new Set(tools.flatMap((tool) => tool.categories))].sort(
  (a, b) =>
    desiredCategoryOrder.indexOf(a as (typeof desiredCategoryOrder)[number]) -
    desiredCategoryOrder.indexOf(b as (typeof desiredCategoryOrder)[number]),
);
const pricingOptions: Tool["pricing"][] = ["免费", "部分付费", "付费"];

function extractDomain(url: string): string {
  try {
    const u = new URL(url);
    return u.hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export default function ToolPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | "全部">("全部");
  const [selectedPricing, setSelectedPricing] = useState<Tool["pricing"] | "全部">("全部");
  const [searchText, setSearchText] = useState("");

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchCategory =
        selectedCategory === "全部" || tool.categories.includes(selectedCategory);
      const matchPricing =
        selectedPricing === "全部" || tool.pricing === selectedPricing;
      const matchSearch =
        !searchText ||
        tool.name.toLowerCase().includes(searchText.toLowerCase().trim());

      return matchCategory && matchPricing && matchSearch;
    });
  }, [selectedCategory, selectedPricing, searchText]);

  const columns: ColumnsType<Tool> = [
    {
      title: "工具",
      dataIndex: "name",
      key: "name",
      render: (text: string) => <span className="text-black">{text}</span>,
    },
    {
      title: "分类",
      dataIndex: "categories",
      key: "categories",
      render: (categories: string[]) => (
        <Space size={[4, 4]} wrap>
          {categories.map((cat) => (
            <Tag
              key={cat}
              className="px-2 py-0.5 text-xs"
              style={{
                backgroundColor: categoryColors[cat] ?? "rgba(229, 229, 229, 0.5)",
                border: "none",
                color: "#000000",
              }}
            >
              {cat}
            </Tag>
          ))}
        </Space>
      ),
    },
    {
      title: "收费",
      dataIndex: "pricing",
      key: "pricing",
      render: (pricing: Tool["pricing"]) => {
        return (
          <Tag
            className="px-2 py-0.5"
            style={{
              backgroundColor: "rgba(229, 229, 229, 0.5)",
              border: "none",
              color: "#000000",
            }}
          >
            {pricing}
          </Tag>
        );
      },
    },
    {
      title: "传送门",
      dataIndex: "url",
      key: "url",
      render: (url: string) => {
        const domain = extractDomain(url);
        return (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="no-underline transition-colors"
            style={{ color: "#000000" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#A14041";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#000000";
            }}
          >
            {domain}
          </a>
        );
      },
    },
  ];

  return (
    <main className="min-h-screen bg-white px-4 py-8 pb-16 text-black md:px-10 md:pb-24">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold">常用工具</h1>
        <p className="mt-3 text-base md:text-lg text-gray-700">
          常用的链上工具集合，可按分类和收费情况进行筛选
        </p>

        {/* 筛选区域 */}
        <div className="mt-8 space-y-3 rounded-xl border border-gray-200 bg-gray-50/60 p-3 shadow-sm">
          <div>
            <div className="mb-2 text-sm font-medium text-gray-600">分类</div>
            <Segmented
              options={[
                { label: "全部", value: "全部" },
                ...allCategories.map((cat) => ({ label: cat, value: cat })),
              ]}
              value={selectedCategory}
              onChange={(val) => setSelectedCategory(val as string | "全部")}
              className="w-full md:w-auto"
            />
          </div>

          <div>
            <div className="mb-2 text-sm font-medium text-gray-600">收费</div>
            <Segmented
              options={[
                { label: "全部", value: "全部" },
                ...pricingOptions.map((p) => ({ label: p, value: p })),
              ]}
              value={selectedPricing}
              onChange={(val) =>
                setSelectedPricing(val as Tool["pricing"] | "全部")
              }
              className="w-full md:w-auto"
            />
          </div>

          <div className="tool-search">
            <div className="mb-2 text-sm font-medium text-gray-600">搜索</div>
            <div className="flex items-center gap-2">
              <Input
                allowClear
                placeholder="按工具名搜索，例如 Arkham / TradingView..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full md:w-80 h-10"
              />
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded border border-gray-300 text-gray-600 transition-colors hover:border-[#A14041] hover:text-[#A14041]"
              >
                🔍
              </button>
            </div>
          </div>
        </div>

        {/* 表格区域 */}
        <div className="mt-8 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <Table<Tool>
            rowKey="name"
            columns={columns}
            dataSource={filteredTools}
            pagination={{ pageSize: 20, showSizeChanger: false }}
            size="middle"
            className="tool-table"
          />
        </div>

        {/* 工具教程链接区域 */}
        <section className="mt-10">
          <h2 className="mb-4 text-xl font-bold text-black">工具教程</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ul className="space-y-2 text-sm md:text-base">
              <li className="flex gap-2">
                <span className="shrink-0">◾</span>
                <a
                  href="https://x.com/ai_9684xtpa/status/1970298304060882968"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-[#A14041]"
                >
                  如何高效追踪巨鲸 / 实体的 Hyperliquid 地址群
                </a>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0">◾</span>
                <a
                  href="https://x.com/ai_9684xtpa/status/1881987475968827404"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-[#A14041]"
                >
                  那些能帮你躲过 Rug / 诈骗盘的 Memecoin 工具们
                </a>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0">◾</span>
                <a
                  href="https://x.com/ai_9684xtpa/status/1879457367676588425"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-[#A14041]"
                >
                  如何快速查看 Memecoin 24 小时内的巨鲸买入卖出
                </a>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0">◾</span>
                <a
                  href="https://x.com/ai_9684xtpa/status/1874475181223326064"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-[#A14041]"
                >
                  是什么项目将 ETH Gas 卷上去了
                </a>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0">◾</span>
                <a
                  href="https://x.com/ai_9684xtpa/status/1787734473666380094"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-[#A14041]"
                >
                  如何使用 DexScreener 展示地址的买卖点位
                </a>
              </li>
            </ul>

            <ul className="space-y-2 text-sm md:text-base">
              <li className="flex gap-2">
                <span className="shrink-0">◾</span>
                <a
                  href="https://x.com/ai_9684xtpa/status/1815218161060602008"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-[#A14041]"
                >
                  如何做到在一屏内监控多个 Meme 的 K 线
                </a>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0">◾</span>
                <a
                  href="https://x.com/ai_9684xtpa/status/1813116274475737112"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-[#A14041]"
                >
                  如何使用 Arkham 创建地址 / 代币监控
                </a>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0">◾</span>
                <a
                  href="https://x.com/ai_9684xtpa/status/1801074822442811716"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-[#A14041]"
                >
                  使用 MetaSuites 自定义地址标签
                </a>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0">◾</span>
                <a
                  href="https://x.com/ai_9684xtpa/status/1797821577884799098"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-[#A14041]"
                >
                  使用 impersonator 伪装成孙哥 / Vitalik 或任何感兴趣地址
                </a>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0">◾</span>
                <a
                  href="https://x.com/ai_9684xtpa/status/1725106426778157255"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-[#A14041]"
                >
                  安利五个好用且免费的工具，让你在 DYOR 时事半功倍
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

