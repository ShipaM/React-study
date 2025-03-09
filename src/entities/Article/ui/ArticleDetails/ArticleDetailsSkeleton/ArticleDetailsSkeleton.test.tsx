import React from "react";
import { render } from "@testing-library/react";
import { ArticleDetailsSkeleton } from "./ArticleDetailsSkeleton";

describe("ArticleDetailsSkeleton", () => {
  it("renders skeleton components correctly", () => {
    const { container } = render(<ArticleDetailsSkeleton />);

    // Verify each skeleton component
    const avatarSkeleton = container.querySelector(".avatar");
    const titleSkeleton = container.querySelector(".title");

    expect(avatarSkeleton).toBeInTheDocument();
    expect(avatarSkeleton).toHaveStyle("width: 200px");
    expect(avatarSkeleton).toHaveStyle("height: 200px");
    expect(avatarSkeleton).toHaveStyle("border-radius: 50%");

    expect(titleSkeleton).toBeInTheDocument();
    expect(titleSkeleton).toHaveStyle("width: 300px");
    expect(titleSkeleton).toHaveStyle("height: 32px");
  });
});
