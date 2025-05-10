import { fireEvent, screen } from "@testing-library/react";
import { ArticleCardSmall } from "./ArticleCardSmall";
import React from "react";
import { ArticleView } from "entities/Article/model/type/article";
import { articleListItem } from "shared/lib/tests/mocks/articleMock";
import { componentRender } from "shared/lib/tests/componentRender/ComponentRender";

describe("ArticleCardBig", () => {
  it("renders correctly with all props", () => {
    const onOpenArticle = jest.fn();

    componentRender(
      <ArticleCardSmall
        className="test-class"
        article={articleListItem}
        view={ArticleView.SMALL}
        onOpenArticle={onOpenArticle}
      />,
      {
        initialState: {
          counter: { value: 10 },
          user: { _isInited: false },
          scrollSave: {
            scroll: {},
          },
          articleDetails: {
            data: undefined,
            isLoading: true,
            error: undefined,
          },
        },
      }
    );

    const cards = screen.getAllByTestId("article-card-small");
    fireEvent.click(cards[0]);
    fireEvent.click(cards[1]);

    expect(cards.length).toBeGreaterThan(0);

    cards.forEach((card) => {
      fireEvent.click(card);

      expect(card).toBeInTheDocument();
    });

    expect(screen.getByText("Sample title")).toBeInTheDocument();
    expect(screen.getAllByText("26.02.2022").length).toBeGreaterThan(0);
    expect(cards).toHaveLength(2);
  });
});
