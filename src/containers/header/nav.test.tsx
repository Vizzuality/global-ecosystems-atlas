import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Nav } from "./nav";

describe("Nav component", () => {
  it("renders correctly", () => {
    const { getByRole, getByText } = render(<Nav />);
    // Check if the navigation items are rendered
    expect(getByText("Homepage")).toBeDefined();
    expect(getByText("Atlas")).toBeDefined();
    expect(getByText("Stories")).toBeDefined();
    expect(getByText("About us")).toBeDefined();
    expect(getByText("Resources")).toBeDefined();
    expect(getByText("Data")).toBeDefined();

    // Check if the contact button is rendered
    expect(getByRole("link", { name: /let's talk/i })).toHaveProperty(
      "href",
      `${window.location.origin}/contact`,
    );
  });

  it("toggles menu open state", () => {
    const { getByRole } = render(<Nav />);

    const button = getByRole("button", { name: /menu/i });
    fireEvent.click(button);

    // Check if the nav is opened
    expect(button.querySelector(".hamburger-react")).toHaveProperty("ariaExpanded", "false");
  });

  it("render social media links", () => {
    const { getByRole } = render(<Nav />);

    // Check if the social media links are rendered
    expect(getByRole("link", { name: /twitter/i })).toHaveProperty(
      "href",
      "https://twitter.com/geosec2025",
    );
    expect(getByRole("link", { name: /linkedin/i })).toHaveProperty(
      "href",
      "https://www.linkedin.com/company/group-on-earth-observations/",
    );
    expect(getByRole("link", { name: /facebook/i })).toHaveProperty(
      "href",
      "https://www.facebook.com/GroupOnEarthObservations",
    );
    expect(getByRole("link", { name: /instagram/i })).toHaveProperty(
      "href",
      "https://www.instagram.com/grouponearthobservations/",
    );
    expect(getByRole("link", { name: /youtube/i })).toHaveProperty(
      "href",
      "https://www.youtube.com/channel/UCFJ97Bp2XXA5p7ik_wWSoqg",
    );
  });
});
