import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Header } from "./index";

describe("Header component", () => {
  it("renders the Logo component", () => {
    render(<Header />);
    const logo = screen.getByTestId("logo");
    expect(logo).toBeDefined();
  });

  it("renders the beta badge", () => {
    render(<Header />);
    const badge = screen.getByText("Beta");
    expect(badge).toBeDefined();
  });

  it("contains a link to the home page", () => {
    render(<Header />);
    const link = screen.getAllByRole("link")[0];
    expect(link).toHaveProperty("href", `${window.location.origin}/`);
  });
});
