import { screen } from "@testing-library/react";
import { ArticleCardBig } from "./ArticleCardBig";
import React from "react";
import {
  ArticleBlockType,
  ArticleTextBlock,
  ArticleView,
} from "entities/Article/model/type/article";
import { articleListItem } from "shared/lib/tests/mocks/articleMock";
import { componentRender } from "shared/lib/tests/componentRender/ComponentRender";

const MockTypes = <div data-testid="mock-types">123</div>;
const MockViews = <div data-testid="mock-views">456</div>;

const mockTextBlock: ArticleTextBlock = {
  type: ArticleBlockType.TEXT,
  paragraphs: ["paragraphs"],
  title: "title",
  id: "id",
};

describe("ArticleCardBig", () => {
  it("renders correctly with all props", () => {
    componentRender(
      <ArticleCardBig
        className="test-class"
        article={articleListItem}
        types={MockTypes}
        views={MockViews}
        view={ArticleView.BIG}
        onOpenArticle={() => {}}
        textBlock={mockTextBlock}
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

    expect(screen.getByTestId("article-card-big")).toBeInTheDocument();
    expect(screen.getByText("Sample title")).toBeInTheDocument();
    expect(screen.getByText("paragraphs")).toBeInTheDocument();
    expect(screen.getByText("26.02.2022")).toBeInTheDocument();
    expect(screen.getByTestId("mock-types")).toBeInTheDocument();
    expect(screen.getByTestId("mock-views")).toBeInTheDocument();
    expect(screen.getByText("READ_MORE")).toBeInTheDocument();
  });
});
