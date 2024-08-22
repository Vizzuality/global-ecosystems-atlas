import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import Page from "./page";

test("Home", () => {
  render(<Page />);
  expect(screen.getByText("Mapping the world's ecosystems for action")).toBeDefined();
});
