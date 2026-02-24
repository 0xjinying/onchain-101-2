// Shared types used by both content.ts (local data) and Sanity (CMS data).

export type HeroData = {
  greeting: string;
  titles: string[];
};

export type SkillsData = {
  skills: string;
  highlights: string[];
};

export type AboutData = {
  image: string;
  imageAlt: string;
  text: string;
};

export type ContactEntry = {
  type: string;
  value: string;
  href: string;
};

export type Project = {
  title: string;
  image: string;
  techStack: string[];
  href?: string;
};

export type ProjectCategory = {
  category: string;
  projects: Project[];
};

export type ContentLink = {
  text: string;
  href: string;
};

export type ContentItem = {
  title: string;
  description: string;
  links?: ContentLink[];
};

export type SiteData = {
  hero: HeroData;
  skills: SkillsData;
  about: AboutData;
  contact: ContactEntry[];
  projectCategories: ProjectCategory[];
  contentCategories: ContentItem[];
};
