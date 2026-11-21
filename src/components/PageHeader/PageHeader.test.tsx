import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vite-plus/test";
import { PageHeader } from "./PageHeader";

const props = {
  eyebrow: "Made with love",
  title: "Our favorites",
  lead: "A small menu of the treats and drinks we love.",
};

describe("PageHeader", () => {
  it("renders the eyebrow, title, and lead copy", () => {
    render(<PageHeader {...props} />);

    expect(screen.getByText(props.eyebrow)).toBeTruthy();
    const title = screen.getByRole("heading", { level: 1 });
    expect(title.textContent).toBe(props.title);
    expect(screen.getByText(props.lead)).toBeTruthy();
  });

  it("renders extra content when children are provided", () => {
    render(
      <PageHeader {...props}>
        <p>Extra note</p>
      </PageHeader>,
    );

    expect(screen.getByText("Extra note")).toBeTruthy();
  });

  it("omits the extra region when there are no children", () => {
    const { container } = render(<PageHeader {...props} />);

    expect(container.querySelector(".page-header__extra")).toBeNull();
    expect(screen.queryByText("Extra note")).toBeNull();
  });
});
