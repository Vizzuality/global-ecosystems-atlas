import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Nav } from "./nav";

describe("Nav component", () => {
  it("renders correctly", () => {
    const { getByRole, getByText } = render(<Nav />);
    // Check if the navigation items are rendered
    expect(getByText("Homepage")).toBeDefined();
    expect(getByText("Atlas")).toBeDefined();
    expect(getByText("About us")).toBeDefined();
    expect(getByText("Methodology")).toBeDefined();
    expect(getByText("Resources")).toBeDefined();
    expect(getByText("Datasets Catalogue")).toBeDefined();

    // Check if the social media links are rendered
    expect(getByRole("link", { name: /twitter/i })).toHaveProperty("href", "https://twitter.com/");
    expect(getByRole("link", { name: /linkedin/i })).toHaveProperty(
      "href",
      "https://linkedin.com/",
    );
    expect(getByRole("link", { name: /facebook/i })).toHaveProperty(
      "href",
      "https://facebook.com/",
    );

    // Check if the contact button is rendered
    expect(getByRole("link", { name: /let's talk/i })).toHaveProperty(
      "href",
      `${window.location.origin}/contact-us`,
    );
  });

  it("toggles menu open state", () => {
    const { getByRole } = render(<Nav />);

    const button = getByRole("button", { name: /menu/i });
    fireEvent.click(button);

    // Check if the nav is opened
    expect(button.querySelector(".hamburger-react")).toHaveProperty("ariaExpanded", "false");
  });
});
