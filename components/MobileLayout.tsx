"use client";

import { useState, useRef } from "react";
import type { SiteData } from "@/data/types";
import {
  HeroSection,
  SkillsSection,
  WorkSection,
  AboutSection,
  ContactSection,
  ContentItemExpanded,
  SectionHeading_Clickable,
  getClipFrom,
} from "./sections";
import ExpandedOverlay from "./sections/ui/ExpandedOverlay";

type MobileLayoutProps = {
  siteData: SiteData;
  expandedSection: "work" | "about" | null;
  setExpandedSection: (section: "work" | "about" | null) => void;
  expandedContentItem: string | null;
  setExpandedContentItem: (item: string | null) => void;
};

export default function MobileLayout({
  siteData,
  expandedSection,
  setExpandedSection,
  expandedContentItem,
  setExpandedContentItem,
}: MobileLayoutProps) {
  const [sourceRect, setSourceRect] = useState<DOMRect | null>(null);

  const handleSubtitleExpand = (
    item: { title: string; description: string },
    rect: DOMRect,
  ) => {
    setSourceRect(rect);
    setExpandedSection("work");
    setExpandedContentItem(item.title);
  };

  const handleCloseWork = () => {
    setExpandedSection(null);
    setExpandedContentItem(null);
  };

  const aboutRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleAboutExpand = () => {
    if (expandedSection === "about") {
      setExpandedSection(null);
    } else {
      const rect = aboutRef.current?.getBoundingClientRect();
      if (rect) setSourceRect(rect);
      setExpandedSection("about");
    }
  };

  const clipFrom = getClipFrom(sourceRect);

  return (
    <div ref={containerRef} className="relative h-dvh overflow-hidden">
      {/* Mobile column layout */}
      <div
        className="grid h-full"
        style={{
          gridTemplateRows:
            "minmax(0, 2.5fr) minmax(0, 2.5fr) minmax(0, 2fr) minmax(0, 0.7fr) minmax(0, 1.5fr)",
        }}
      >
        {/* Hero Section */}
        <div className="overflow-hidden border-b border-black px-6 py-6">
          <HeroSection data={siteData.hero} />
        </div>

        {/* Skills Section */}
        <div className="overflow-hidden border-b border-black px-6 py-6">
          <SkillsSection data={siteData.skills} />
        </div>

        {/* Content Section */}
        <div className="overflow-hidden border-b border-black px-6 py-6">
          <WorkSection
            data={siteData.contentCategories}
            onSubtitleExpand={handleSubtitleExpand}
          />
        </div>

        {/* About Section */}
        <div
          ref={aboutRef}
          className="flex cursor-pointer items-center justify-between overflow-hidden border-b border-black bg-white px-6 transition-colors duration-200 hover:bg-gray-50"
        >
          <SectionHeading_Clickable onClick={handleAboutExpand}>
            About Me
          </SectionHeading_Clickable>
          <div onClick={handleAboutExpand} className="text-xl">
            +
          </div>
        </div>

        {/* Contact Section */}
        <div className="overflow-hidden bg-white px-6 py-6">
          <ContactSection data={siteData.contact} />
        </div>
      </div>

      {/* Content 小标题展开遮罩 */}
      <ExpandedOverlay
        isOpen={expandedSection === "work" && !!expandedContentItem}
        clipFrom={clipFrom}
        padding="p-8"
        uniqueKey={expandedContentItem ? `work-${expandedContentItem}` : "work-placeholder"}
      >
        {expandedContentItem ? (
          (() => {
            const item = siteData.contentCategories.find(
              (c) => c.title === expandedContentItem,
            );
            return item ? (
              <ContentItemExpanded item={item} onClose={handleCloseWork} />
            ) : null;
          })()
        ) : (
          <div />
        )}
      </ExpandedOverlay>

      <ExpandedOverlay
        isOpen={expandedSection === "about"}
        clipFrom={clipFrom}
        padding="pt-0 px-6 pb-6"
        uniqueKey="about-expanded"
      >
        <AboutSection
          data={siteData.about}
          onExpand={handleAboutExpand}
          isExpanded={true}
        />
      </ExpandedOverlay>
    </div>
  );
}
