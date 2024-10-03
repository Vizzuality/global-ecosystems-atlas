import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, Mock } from "vitest";

import { useEcosystems } from "@/lib/taxonomy";

import { useSyncBiomes, useSyncEcosystems, useSyncRealms } from "@/app/(atlas)/atlas/store";

import { EcosystemsTrigger, EcosystemsContent } from "./index";

// Mock the hooks
vi.mock("@/lib/taxonomy", () => ({
  useEcosystems: vi.fn(),
}));

vi.mock("@/app/(atlas)/atlas/store", () => ({
  useSyncBiomes: vi.fn(),
  useSyncEcosystems: vi.fn(),
  useSyncRealms: vi.fn(),
}));

describe("EcosystemsTrigger component", () => {
  it("renders the filtered and total ecosystems count", () => {
    (useSyncRealms as Mock).mockReturnValue([[]]);
    (useSyncBiomes as Mock).mockReturnValue([[]]);
    (useEcosystems as Mock).mockReturnValueOnce([
      { id: "eco1", name: "Ecosystem 1" },
      { id: "eco2", name: "Ecosystem 2" },
    ]);
    (useEcosystems as Mock).mockReturnValue([{ id: "eco1", name: "Ecosystem 1" }]);

    const { getByText } = render(<EcosystemsTrigger />);
    expect(getByText("Ecosystems")).toBeDefined();
    expect(getByText("1/2")).toBeDefined();
  });
});

describe("EcosystemsContent component", () => {
  it("renders the list of ecosystems with checkboxes and labels", () => {
    (useSyncRealms as Mock).mockReturnValue([[]]);
    (useSyncBiomes as Mock).mockReturnValue([[]]);
    (useSyncEcosystems as Mock).mockReturnValue([[], vi.fn()]);
    (useEcosystems as Mock).mockReturnValue([
      { id: "eco1", name: "Ecosystem 1" },
      { id: "eco2", name: "Ecosystem 2" },
    ]);

    const { getByLabelText } = render(<EcosystemsContent />);
    expect(getByLabelText("eco1 Ecosystem 1")).toBeDefined();
    expect(getByLabelText("eco2 Ecosystem 2")).toBeDefined();
  });

  it("handles checkbox changes correctly", () => {
    const setEcosystems = vi.fn();
    (useSyncRealms as Mock).mockReturnValue([[]]);
    (useSyncBiomes as Mock).mockReturnValue([[]]);
    (useSyncEcosystems as Mock).mockReturnValue([["eco1"], setEcosystems]);
    (useEcosystems as Mock).mockReturnValue([
      { id: "eco1", name: "Ecosystem 1" },
      { id: "eco2", name: "Ecosystem 2" },
    ]);

    const { getByLabelText } = render(<EcosystemsContent />);
    const checkbox = getByLabelText("eco2 Ecosystem 2");

    fireEvent.click(checkbox);
    expect(setEcosystems).toHaveBeenCalledWith(expect.any(Function));
    fireEvent.click(checkbox);
    expect(setEcosystems).toHaveBeenCalledWith(expect.any(Function));
  });
});
