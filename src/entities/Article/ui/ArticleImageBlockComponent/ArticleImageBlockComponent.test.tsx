import React from "react";
import { render, screen } from "@testing-library/react";
import { ArticleImageBlockComponent } from "./ArticleImageBlockComponent";
import { ArticleBlockType, ArticleImageBlock } from "entities/Article/model/type/article";

describe("ArticleImageBlockComponent", () => {
  const mockBlock: ArticleImageBlock = {
    id: "1",
    type: ArticleBlockType.IMAGE,
    src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
    title: "Screen",
  };

  it("renders the image with the correct src and alt", () => {
    render(<ArticleImageBlockComponent block={mockBlock} />);

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", mockBlock.src);
    expect(image).toHaveAttribute("alt", mockBlock.title);
  });

  it("renders the title text when provided", () => {
    render(<ArticleImageBlockComponent block={mockBlock} />);
    expect(screen.getByText("Screen")).toBeInTheDocument();
  });

  it("does not render the title text when it is not provided", () => {
    render(<ArticleImageBlockComponent block={{ ...mockBlock, title: "" }} />);
    expect(screen.queryByText("Screen")).not.toBeInTheDocument();
  });

  it("applies the className prop if provided", () => {
    const customClass = "custom-class";
    const { container } = render(
      <ArticleImageBlockComponent block={mockBlock} className={customClass} />
    );

    expect(container.firstChild).toHaveClass("custom-class");
  });
});
