import type { AboutData } from "@/data/types";
import { CloseButton } from "./ui/CloseButton";
import { SectionHeading_Clickable } from "./ui/SectionHeading_Clickable";

type AboutSectionProps = {
  data: AboutData;
  onExpand?: () => void;
  isExpanded?: boolean;
};

export function AboutSection({
  data,
  onExpand,
  isExpanded = false,
}: AboutSectionProps) {
  if (isExpanded) {
    return (
      <div className="relative h-full">
        <CloseButton onClick={onExpand} />

        {/* Mobile: stacked layout / Desktop: side-by-side */}
        <div className="flex h-full flex-col md:flex-row md:items-center md:gap-12 lg:gap-12 mt-0 mx-12 mb-12">
          <div className="flex shrink-0 items-center justify-center pt-0 pb-6 md:w-2/5 md:py-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={data.image}
              alt={data.imageAlt}
              className="h-32 w-32 object-contain sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-52 lg:w-52"
            />
          </div>
          <div className="md:w-3/5">
            <SectionHeading_Clickable onClick={onExpand}>
              {`About Me`}
            </SectionHeading_Clickable>
            <p className="text-body leading-relaxed text-black whitespace-pre-line md:text-lg md:leading-relaxed">
              {data.text}
            </p>
            <div className="mt-3 text-sm text-black md:text-base">
              <a
                href="https://x.com/ai_9684xtpa"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-[#A14041]"
              >
                Twitter
              </a>
              <span className="mx-2">|</span>
              <a
                href="https://www.binance.com/zh-CN/square/profile/aiaptx"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-[#A14041]"
              >
                币安广场
              </a>
              <span className="mx-2">|</span>
              <a
                href="https://t.me/+4SjLQI96GHQyZDVl"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-[#A14041]"
              >
                TG 频道
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full">
      <div className="flex items-center justify-between">
        <SectionHeading_Clickable onClick={onExpand}>
          {`About Me`}
        </SectionHeading_Clickable>
      </div>

      <div className="mt-3 flex items-start gap-3 pl-8 sm:mt-4 sm:gap-4 xl:gap-6">
        <div className="relative h-16 w-16 shrink-0 sm:h-20 sm:w-20 md:h-28 md:w-28 xl:h-36 xl:w-36">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={data.image}
            alt={data.imageAlt}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="flex-1">
          <p className="text-body text-black whitespace-pre-line">
            {data.text}
          </p>
          <div className="mt-3 text-sm text-black md:text-base">
            <a
              href="https://x.com/ai_9684xtpa"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[#A14041]"
            >
              Twitter
            </a>
            <span className="mx-2">|</span>
            <a
              href="https://www.binance.com/zh-CN/square/profile/aiaptx"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[#A14041]"
            >
              币安广场
            </a>
            <span className="mx-2">|</span>
            <a
              href="https://t.me/+4SjLQI96GHQyZDVl"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[#A14041]"
            >
              TG 频道
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
