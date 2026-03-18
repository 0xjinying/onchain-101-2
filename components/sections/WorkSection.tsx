import type { ContentItem } from "@/data/types";
import { SectionHeading_Clickable } from "./ui/SectionHeading_Clickable";

type WorkSectionProps = {
  data: ContentItem[];
  onExpand?: () => void;
  onSubtitleExpand?: (item: ContentItem, rect: DOMRect) => void;
  isExpanded?: boolean;
};

export function WorkSection({
  data,
  onExpand,
  onSubtitleExpand,
  isExpanded = false,
}: WorkSectionProps) {
  const handleSubtitleClick = (item: ContentItem, target: HTMLElement) => {
    if (item.url) {
      window.open(item.url, "_blank", "noopener,noreferrer");
      return;
    }
    onSubtitleExpand?.(item, target.getBoundingClientRect());
  };

  return (
    <div className="relative h-full">
      <div className="flex items-center justify-between">
        {onExpand ? (
          <SectionHeading_Clickable onClick={onExpand}>
            Content
          </SectionHeading_Clickable>
        ) : (
          <h3 className="heading-section-sm">Content</h3>
        )}
      </div>
      <div className="mt-4 flex flex-col items-center">
        <div
          className={`w-max text-left ${isExpanded ? "space-y-5" : "space-y-4"}`}
        >
          {data.map((item) => (
            <div key={item.title} className="w-full">
              {onSubtitleExpand ? (
                <span
                  role="button"
                  tabIndex={0}
                  onClick={(e) => handleSubtitleClick(item, e.currentTarget)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleSubtitleClick(item, e.currentTarget);
                    }
                  }}
                  className="group relative inline-block cursor-pointer overflow-hidden py-0 transition-all duration-300 ease-out hover:scale-105"
                >
                  <span className="absolute inset-0 origin-left scale-x-0 bg-black transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  <span
                    className={`relative z-10 text-black transition-colors duration-300 group-hover:text-white ${
                      isExpanded ? "font-bold" : "font-normal"
                    }`}
                    style={{ fontSize: "24px" }}
                  >
                    {item.title}
                  </span>
                </span>
              ) : (
                <h4
                  className={`mb-0 text-black ${
                    isExpanded ? "font-bold" : "font-normal"
                  }`}
                  style={{ fontSize: "24px", lineHeight: "1.1" }}
                >
                  {item.title}
                </h4>
              )}
              <div className="mt-0">
                <p className="text-sm text-black md:text-base">{item.description}</p>
                <div className="mt-2 border-b border-gray-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
