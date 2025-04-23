import { render, screen, fireEvent } from "@testing-library/react";
import { ArticleViewSelector } from "./ArticleViewSelector";
import { ArticleView } from "entities/Article/model/type/article";

describe("ArticleViewSelector", () => {
  it("should render both view buttons", () => {
    render(<ArticleViewSelector view={ArticleView.SMALL} />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
  });

  it("should call onViewClick with correct view when button is clicked", () => {
    const onViewClick = jest.fn();
    render(
      <ArticleViewSelector view={ArticleView.BIG} onViewClick={onViewClick} />
    );
    const buttons = screen.getAllByRole("button");

    fireEvent.click(buttons[0]); // clicking on SMALL
    expect(onViewClick).toHaveBeenCalledWith(ArticleView.SMALL);

    fireEvent.click(buttons[1]); // clicking on BIG
    expect(onViewClick).toHaveBeenCalledWith(ArticleView.BIG);
  });

  it("applies additional className to the root element", () => {
    render(
      <ArticleViewSelector view={ArticleView.SMALL} className="custom-class" />
    );
    expect(screen.getByTestId("article-view-big").parentElement).toHaveClass(
      "article-view-selector",
      "custom-class"
    );
    expect(screen.getByTestId("article-view-small").parentElement).toHaveClass(
      "article-view-selector",
      "custom-class"
    );
  });
});
