import { BiomesPopup } from "@/containers/atlas/map/popup/content/biomes";
import { EFGSPopup } from "@/containers/atlas/map/popup/content/efgs";
import { RealmsPopup } from "@/containers/atlas/map/popup/content/realms";

export const POPUPS = {
  efgs: EFGSPopup,
  biomes: BiomesPopup,
  realms: RealmsPopup,
} as const;
