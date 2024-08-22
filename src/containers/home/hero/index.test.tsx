import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import HomeHero from "./index";

describe("HomeHero component", () => {
  it("renders the heading", () => {
    const { getByRole } = render(<HomeHero />);
    const heading = getByRole("heading", { name: /mapping the world's ecosystems for action/i });
    expect(heading).toBeDefined();
  });

  it("renders the paragraph about the Global Ecosystems Atlas", () => {
    const { getByText } = render(<HomeHero />);
    const paragraph = getByText(
      /the global ecosystems atlas will be the first comprehensive harmonised open resource/i,
    );
    expect(paragraph).toBeDefined();
  });

  it("renders the link to the atlas with correct href", () => {
    const { getByRole } = render(<HomeHero />);
    const link = getByRole("link", { name: /explore the atlas/i });
    expect(link).toHaveProperty("href", `${window.location.origin}/atlas`);
  });

  it("renders the button with correct text", () => {
    const { getByRole } = render(<HomeHero />);
    const button = getByRole("button", { name: /explore the atlas/i });
    expect(button).toBeDefined();
  });
});
