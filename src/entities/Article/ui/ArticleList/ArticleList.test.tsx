import { screen } from "@testing-library/react";
import { ArticleList } from "./ArticleList";
import { ArticleView } from "../../model/type/article";
import { articles } from "shared/lib/tests/mocks/articleMock";
import { componentRender } from "shared/lib/tests/componentRender/ComponentRender";

describe("ArticleList", () => {
  it("should render 9 skeletons when loading and view is small", () => {
    componentRender(
      <ArticleList articles={[]} isLoading={true} view={ArticleView.SMALL} />,
      {
        initialState: {
          counter: { value: 0 },
          user: { _isInited: false },
        },
      }
    );

    const skeletonList = screen.getAllByTestId(
      "article-listItem-skeleton-small"
    );

    expect(screen.getByTestId("article-list-skeleton")).toBeInTheDocument();

    expect(skeletonList).toHaveLength(9);
  });

  it("should render 3 skeletons when loading and view is big", () => {
    componentRender(
      <ArticleList articles={[]} isLoading={true} view={ArticleView.BIG} />,
      {
        initialState: {
          counter: { value: 0 },
          user: { _isInited: false },
        },
      }
    );

    const skeletonList = screen.getAllByTestId("article-listItem-skeleton-big");

    expect(screen.getByTestId("article-list-skeleton")).toBeInTheDocument();

    expect(skeletonList).toHaveLength(3);
  });

  it("should render list of articles when view is big", () => {
    componentRender(
      <ArticleList
        articles={articles}
        isLoading={false}
        view={ArticleView.BIG}
      />,
      {
        initialState: {
          counter: { value: 0 },
          user: { _isInited: false },
        },
      }
    );

    expect(screen.getByTestId("article-list")).toBeInTheDocument();
    expect(screen.getAllByText("1022")).toHaveLength(4);
    expect(screen.getAllByText("READ_MORE")).toHaveLength(4);
    expect(screen.queryByTestId("article-card-small")).not.toBeInTheDocument();
    expect(screen.getAllByTestId("article-card-big")).toHaveLength(4);
  });

  it("should render list of articles when view is small", () => {
    componentRender(
      <ArticleList
        articles={articles}
        isLoading={false}
        view={ArticleView.SMALL}
      />,
      {
        initialState: {
          counter: { value: 0 },
          user: { _isInited: false },
        },
      }
    );

    const cards = screen.getAllByTestId("article-card-small");

    expect(cards.length).toBeGreaterThan(0);

    cards.forEach((card) => {
      expect(card).toBeInTheDocument();
    });
    expect(screen.getByTestId("article-list")).toBeInTheDocument();
    expect(screen.queryByTestId("article-card-big")).not.toBeInTheDocument();
  });

  it("should render empty container when no articles", () => {
    componentRender(
      <ArticleList articles={[]} isLoading={false} view={ArticleView.SMALL} />,
      {
        initialState: {
          counter: { value: 0 },
          user: { _isInited: false },
        },
      }
    );

    expect(screen.getByTestId("article-list")).toBeInTheDocument();
    expect(screen.queryByTestId("article-card-small")).not.toBeInTheDocument();
  });
});
