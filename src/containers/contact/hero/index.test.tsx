import { PropsWithChildren } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import ContactHero from "./index";

const queryClient = new QueryClient();
const wrapper = ({ children }: PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

global.ResizeObserver = class ResizeObserver {
  cb: ResizeObserverCallback;
  constructor(cb: ResizeObserverCallback) {
    this.cb = cb;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe("ContactHero component", () => {
  it("renders the heading", () => {
    const { getByRole } = render(<ContactHero />, { wrapper });
    const heading = getByRole("heading", { name: /let's talk/i });
    expect(heading).toBeDefined();
  });

  it("renders the email link with correct href", () => {
    const { getByRole } = render(<ContactHero />, { wrapper });
    const link = getByRole("link", { name: /ecosystems\.atlas@geosec\.org/i });
    expect(link).toHaveProperty("href", "mailto:ecosystems.atlas@geosec.org");
  });

  it("renders the ContactForm component", () => {
    const { getByRole } = render(<ContactHero />, { wrapper });

    expect(getByRole("textbox", { name: "Name" })).toBeDefined();
    expect(getByRole("textbox", { name: "Email" })).toBeDefined();
    expect(getByRole("textbox", { name: "Your message" })).toBeDefined();
  });
});
