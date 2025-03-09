import React from "react";
import { render, screen } from "@testing-library/react";
import { ArticleCodeBlockComponent } from "./ArticleCodeBlockComponent";
import {
  ArticleBlockType,
  ArticleCodeBlock,
} from "entities/Article/model/type/article";

describe("ArticleCodeBlockComponent", () => {
  const mockBlock: ArticleCodeBlock = {
    id: "1",
    type: ArticleBlockType.CODE,
    code: `console.log("Hello, world!");`,
  };

  it("renders the component with the provided code", () => {
    render(<ArticleCodeBlockComponent block={mockBlock} />);

    // Ensure the Code component is rendered with the correct text
    expect(
      screen.getByText(/console\.log\("Hello, world!"\);/)
    ).toBeInTheDocument();
  });

  it("applies the className prop if provided", () => {
    const customClass = "custom-class";
    const { container } = render(
      <ArticleCodeBlockComponent block={mockBlock} className={customClass} />
    );

    expect(container.firstChild).toHaveClass("custom-class");
  });
});
