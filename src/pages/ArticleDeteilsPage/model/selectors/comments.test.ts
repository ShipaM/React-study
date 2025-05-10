import {
  getArticleCommentsIsLoaading,
  getArticleCommentsError,
} from "./comment";
import { StateSchema } from "app/providers/StoreProvider";

describe("articleDetailsPageSelectors", () => {
  const baseState: DeepPartial<StateSchema> = {
    articleDetailsPage: {
      comments: {
        isLoading: true,
        error: "Some error occurred",
        ids: [],
        entities: {},
      },
      recommendations: {
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
      },
    },
  };

  test("getArticleCommentsIsLoaading", () => {
    expect(getArticleCommentsIsLoaading(baseState as StateSchema)).toBe(true);
  });

  test("getArticleCommentsError", () => {
    expect(getArticleCommentsError(baseState as StateSchema)).toBe(
      "Some error occurred"
    );
  });

  test("getArticleCommentsIsLoaading when state is empty", () => {
    const emptyState = {} as StateSchema;
    expect(getArticleCommentsIsLoaading(emptyState)).toBeUndefined();
  });

  test("getArticleCommentsError when state is empty", () => {
    const emptyState = {} as StateSchema;
    expect(getArticleCommentsError(emptyState)).toBeUndefined();
  });
});
