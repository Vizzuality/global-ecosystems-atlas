export const REALMS = {
  T: {
    id: "T",
    name: "Terrestrial",
    color: "#FFC107",
  },
  F: {
    id: "F",
    name: "Freshwater",
    color: "#4CAF50",
  },
  M: {
    id: "M",
    name: "Marine",
    color: "#2196F3",
  },
  S: {
    id: "S",
    name: "Subterranean",
    color: "#9C27B0",
  },
  FT: {
    id: "FT",
    name: "Terrestrial-Freshwater",
    color: "#FF5722",
  },
  FM: {
    id: "FM",
    name: "Freshwater-Marine",
    color: "#795548",
  },
  MT: {
    id: "MT",
    name: "Terrestrial-Marine",
    color: "#607D8B",
  },
  FS: {
    id: "FS",
    name: "Freshwater-Subterranean",
    color: "#FF9800",
  },
  MS: {
    id: "MS",
    name: "Marine-Subterranean",
    color: "#3F51B5",
  },
  FMT: {
    id: "FMT",
    name: "Terrestrial-Freshwater-Marine",
    color: "#9E9E9E",
  },
} as const;

export type RealmsIds = keyof typeof REALMS;
