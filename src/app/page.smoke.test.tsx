import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("cute — home page", () => {
  it("renders the landing hero without crashing", () => {
    const { container } = render(<Home />);
    expect(container.firstChild).toBeTruthy();
  });

  it("shows the marketing headline", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /cute things, shipped clean/i }),
    ).toBeInTheDocument();
  });

  it("exposes a main landmark for accessibility", () => {
    const { container } = render(<Home />);
    expect(container.querySelector("main")).not.toBeNull();
  });
});
