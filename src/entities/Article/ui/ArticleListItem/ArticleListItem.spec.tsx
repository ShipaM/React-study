import React from "react";
import { screen } from "@testing-library/react";
import { ArticleListItem } from "./ArticleListItem";
import { ArticleView } from "../../model/type/article";
import { componentRender } from "shared/lib/tests/componentRender/ComponentRender";
import { articleListItem } from "shared/lib/tests/mocks/articleMock";
import { useNavigate } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("ArticleListItem", () => {
  const navigate = jest.fn();

  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(navigate);
  });

  it("renders ArticleCardBig when view is BIG", () => {
    componentRender(
      <ArticleListItem article={articleListItem} view={ArticleView.BIG} />,
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
    expect(screen.getByText("ECONOMICS, IT, SCIENCE")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("Sample title")).toBeInTheDocument();
  });

  it("renders ArticleCardSmall when view is not BIG", () => {
    componentRender(
      <ArticleListItem article={articleListItem} view={ArticleView.SMALL} />,
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

    expect(screen.getByText("ECONOMICS, IT, SCIENCE")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.queryByText("Sample text")).not.toBeInTheDocument();
  });
});
