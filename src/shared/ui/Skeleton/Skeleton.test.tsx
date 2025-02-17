import React from "react";
import { render } from "@testing-library/react";
import { Skeleton } from "./Skeleton";

describe("Skeleton Component", () => {
  it("renders with default props", () => {
    const { container } = render(<Skeleton />);
    const skeletonElement = container.firstChild as HTMLElement;

    expect(skeletonElement).toBeInTheDocument();
    expect(skeletonElement.tagName).toBe("DIV");
    expect(skeletonElement).toHaveClass("skeleton");
  });

  it("applies className prop correctly", () => {
    const { container } = render(<Skeleton className="custom-class" />);
    const skeletonElement = container.firstChild as HTMLElement;

    expect(skeletonElement).toHaveClass("custom-class");
  });

  it("applies height and width styles when provided", () => {
    const { container } = render(<Skeleton height="50px" width="100px" />);
    const skeletonElement = container.firstChild as HTMLElement;

    expect(skeletonElement.style.height).toBe("50px");
    expect(skeletonElement.style.width).toBe("100px");
  });

  it("applies border radius style when provided", () => {
    const { container } = render(<Skeleton border="50%" />);
    const skeletonElement = container.firstChild as HTMLElement;

    expect(skeletonElement.style.borderRadius).toBe("50%");
  });
});
