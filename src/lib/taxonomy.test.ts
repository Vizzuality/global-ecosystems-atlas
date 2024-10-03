import { renderHook } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, Mock } from "vitest";

import { useApiEcosystemsGet } from "@/types/generated/ecosystems";

import {
  getRealmsFromEFGCode,
  getBiomeFromEFGCode,
  useEcosystems,
  useBiomes,
  useRealms,
} from "./taxonomy";

// Mock the useApiEcosystemsGet hook
vi.mock("@/types/generated/ecosystems", () => ({
  useApiEcosystemsGet: vi.fn(),
}));

const mockEcosystemsData = {
  data: [
    {
      efg_code: "T1.1",
      efg_name: "Ecosystem 1",
      biome_name: "Biome 1",
      realm_name: "Realm 1",
    },
    {
      efg_code: "TF2.2",
      efg_name: "Ecosystem 2",
      biome_name: "Biome 2",
      realm_name: "Realm 2",
    },
    {
      efg_code: "S3.3",
      efg_name: "Ecosystem 3",
      biome_name: "Biome 3",
      realm_name: "Realm 3",
    },
  ],
};

describe("taxonomy functions and hooks", () => {
  beforeEach(() => {
    (useApiEcosystemsGet as Mock).mockReturnValue({ data: mockEcosystemsData });
  });

  it("getRealmsFromEFGCode removes numbers and dots, then splits by letters", () => {
    const result = getRealmsFromEFGCode("T1.2");
    expect(result).toEqual(["T"]);
  });

  it("getBiomeFromEFGCode returns the first part of the code", () => {
    const result = getBiomeFromEFGCode("T1.2");
    expect(result).toBe("T1");
  });

  it("useEcosystems filters and maps data correctly", () => {
    const { result } = renderHook(() => useEcosystems());
    expect(result.current).toEqual([
      {
        id: "T1.1",
        name: "Ecosystem 1",
        code: "T1.1",
        biome: "T1",
        realms: ["T"],
      },
      {
        id: "TF2.2",
        name: "Ecosystem 2",
        code: "TF2.2",
        biome: "TF2",
        realms: ["T", "F"],
      },
      {
        id: "S3.3",
        name: "Ecosystem 3",
        code: "S3.3",
        biome: "S3",
        realms: ["S"],
      },
    ]);
  });

  it("useBiomes filters and maps data correctly", () => {
    const { result } = renderHook(() => useBiomes());
    expect(result.current).toEqual([
      {
        id: "T1",
        name: "Biome 1",
        biome: "T1",
        realms: ["T"],
      },
      {
        id: "TF2",
        name: "Biome 2",
        biome: "TF2",
        realms: ["T", "F"],
      },
      {
        id: "S3",
        name: "Biome 3",
        biome: "S3",
        realms: ["S"],
      },
    ]);
  });

  it("useRealms filters and maps data correctly", () => {
    const { result } = renderHook(() => useRealms());
    expect(result.current).toEqual([
      {
        id: "T",
        name: "Realm 1",
        realms: ["T"],
      },
      {
        id: "S",
        name: "Realm 3",
        realms: ["S"],
      },
    ]);
  });
});
