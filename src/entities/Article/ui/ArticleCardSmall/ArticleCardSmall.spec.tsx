import { screen } from "@testing-library/react";
import { ArticleCardSmall } from "./ArticleCardSmall";
import React from "react";
import { ArticleView } from "entities/Article/model/type/article";
import { articleListItem } from "shared/lib/tests/mocks/articleMock";
import { componentRender } from "shared/lib/tests/componentRender/ComponentRender";

describe("ArticleCardBig", () => {
  it("renders correctly with all props", () => {
    componentRender(
      <ArticleCardSmall
        className="test-class"
        article={articleListItem}
        view={ArticleView.SMALL}
      />,
      {
        initialState: {
          counter: { value: 10 },
          user: { _isInited: false },
          articleDetails: {
            data: undefined,
            isLoading: true,
            error: undefined,
          },
        },
      }
    );

    expect(screen.getByTestId("article-card-small")).toBeInTheDocument();
    expect(screen.getByText("Sample title")).toBeInTheDocument();
    expect(screen.getByText("26.02.2022")).toBeInTheDocument();
  });
});
