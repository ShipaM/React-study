import React from "react";
import { render, screen } from "@testing-library/react";
import { ArticleDetailsSkeleton } from "./ArticleDetailsSkeleton";

describe("ArticleDetailsSkeleton", () => {
  it("renders skeleton components correctly", () => {
    render(<ArticleDetailsSkeleton />);

    // Verify each skeleton component
    const avatarSkeleton = screen.getByTestId("avatar-skeleton");

    expect(avatarSkeleton).toBeInTheDocument();
    expect(avatarSkeleton).toHaveStyle("width: 200px");
    expect(avatarSkeleton).toHaveStyle("height: 200px");
  });
});
