import { readdirSync, existsSync } from "fs";
import path from "path";

const INSTITUTIONS = [
  "Wintermute",
  "Jump Tradings",
  "GSR Markets",
  "Flow Traders",
  "DWF Labs",
  "Amber Group",
] as const;

export type InstitutionIcons = {
  institution: string;
  icons: { name: string; src: string }[];
};

export function getInstitutionIcons(): InstitutionIcons[] {
  const iconsRoot = path.join(process.cwd(), "public", "icons");
  if (!existsSync(iconsRoot)) return [];

  return INSTITUTIONS.map((institution) => {
    const folderPath = path.join(iconsRoot, institution);
    let files: string[] = [];

    if (existsSync(folderPath)) {
      try {
        files = readdirSync(folderPath).filter(
          (f) => f.endsWith(".png") || f.endsWith(".PNG"),
        );
      } catch {
        files = [];
      }
    }

    const icons = files.map((filename) => {
      const name = filename.replace(/\.png$/i, "");
      const encodedFolder = encodeURIComponent(institution);
      const src = `/icons/${encodedFolder}/${filename}`;
      return { name, src };
    });

    return { institution, icons };
  });
}
