import React from "react";
import { render, screen } from "@testing-library/react";
import { ArticleListItemSkeleton } from "./ArticleListItemSkeleton";
import { ArticleView } from "entities/Article/model/type/article";

describe("ArticleListItemSkeleton", () => {
  test("renders BIG view skeleton", () => {
    render(<ArticleListItemSkeleton view={ArticleView.BIG} />);
    expect(
      screen.getByTestId("article-listItem-skeleton-big")
    ).toBeInTheDocument();
  });

  test("renders SMALL view skeleton", () => {
    render(<ArticleListItemSkeleton view={ArticleView.SMALL} />);
    expect(
      screen.getByTestId("article-listItem-skeleton-small")
    ).toBeInTheDocument();
  });
});
