import type { ContentItem } from "@/data/types";
import { CloseButton } from "./ui/CloseButton";

type ContentItemExpandedProps = {
  item: ContentItem;
  onClose: () => void;
};

export function ContentItemExpanded({ item, onClose }: ContentItemExpandedProps) {
  return (
    <div className="relative flex min-h-full flex-col">
      <CloseButton onClick={onClose} />
      <div className="max-w-4xl flex-1 pl-48 pt-12 pb-12 pr-8">
        {/* 小标题和补充说明 */}
        <div className="mb-8">
          <h4
            className="font-bold text-black"
            style={{ fontSize: "24px" }}
          >
            {item.title}
          </h4>
          <p className="mt-2 text-sm text-black md:text-base">
            {item.description}
          </p>
        </div>

        {/* 链接列表：居左、自动换行，每项前加 ◾ */}
        {item.links && item.links.length > 0 && (
          <ul className="space-y-4 text-left">
            {item.links.map((link, index) => (
              <li key={index} className="flex gap-2">
                <span className="shrink-0">◾</span>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block flex-1 break-words text-black transition-colors hover:text-[#A14041]"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
