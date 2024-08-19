import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import Page from "./page";

test("Coming soon", () => {
  render(<Page />);
  expect(screen.getByText("Coming soon")).toBeDefined();
});
