import { getInstitutionIcons } from "@/lib/icons";
import Image from "next/image";

export default function MarketMakersPage() {
  const institutionData = getInstitutionIcons();

  return (
    <main className="min-h-screen bg-white px-8 py-10 text-black md:px-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold">做市商</h1>
        <p className="mt-3 text-base md:text-lg">热门做市商及其公开做市项目</p>

        <div className="mt-8 space-y-12">
          {institutionData.map(({ institution, icons }) => (
            <section key={institution} className="rounded-xl border border-gray-200 bg-gray-50/50 p-6 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold text-black">{institution}</h2>
              <div className="grid grid-cols-4 gap-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
                {icons.map(({ name, src }) => (
                  <div
                    key={name}
                    className="flex flex-col items-center rounded-lg bg-white p-3 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="relative h-12 w-12 shrink-0">
                      <Image
                        src={src}
                        alt={name}
                        width={48}
                        height={48}
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <span className="mt-1.5 text-center text-xs font-medium text-black">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
              {icons.length === 0 && (
                <p className="text-sm text-gray-500">暂无图标</p>
              )}
            </section>
          ))}
        </div>

        <div className="mt-12 whitespace-pre-line text-base leading-relaxed">
          说明：该页面统计的做市项目只选取了公开可验证的部分，如果存在遗漏欢迎
          <a
            href="https://www.aiaptx.me/"
            className="transition-colors hover:text-[#A14041]"
          >
            与我联系
          </a>
          {"\n"}
          更新：2026.03
        </div>
      </div>
    </main>
  );
}
