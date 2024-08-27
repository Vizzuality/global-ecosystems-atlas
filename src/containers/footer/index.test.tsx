import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Footer } from "./index";

describe("Footer component", () => {
  it("renders the Logo component", () => {
    const { getByTestId } = render(<Footer />);
    const logo = getByTestId("logo");
    expect(logo).toBeDefined();
  });

  it("renders the link to the homepage with correct href", () => {
    const { getByRole } = render(<Footer />);
    const link = getByRole("link", { name: /homepage/i });
    expect(link).toHaveProperty("href", `${window.location.origin}/`);
  });

  it("renders the social media icons", () => {
    const { container } = render(<Footer />);
    const facebookIcon = container.querySelector("svg[data-icon='facebook']");
    const instagramIcon = container.querySelector("svg[data-icon='instagram']");
    const linkedinIcon = container.querySelector("svg[data-icon='linkedin']");
    const xIcon = container.querySelector("svg[data-icon='x']");
    const youtubeIcon = container.querySelector("svg[data-icon='youtube']");

    expect(facebookIcon).toBeDefined();
    expect(instagramIcon).toBeDefined();
    expect(linkedinIcon).toBeDefined();
    expect(xIcon).toBeDefined();
    expect(youtubeIcon).toBeDefined();
  });
});
