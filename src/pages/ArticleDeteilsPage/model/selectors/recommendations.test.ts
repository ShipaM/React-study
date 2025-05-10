import {
  getArticleRecommendationsIsLoading,
  getArticleRecommendationsError,
} from "./recommendations";
import { StateSchema } from "app/providers/StoreProvider";

describe("articleDetailsPageRecommendationsSelectors", () => {
  const baseState: DeepPartial<StateSchema> = {
    articleDetailsPage: {
      comments: {
        isLoading: false,
        error: "Some error occurred",
        ids: [],
        entities: {},
      },
      recommendations: {
        isLoading: true,
        error: "Failed to load recommendations",
        ids: [],
        entities: {},
      },
    },
  };

  test("getArticleRecommendationsIsLoading", () => {
    expect(getArticleRecommendationsIsLoading(baseState as StateSchema)).toBe(
      true
    );
  });

  test("getArticleRecommendationsError", () => {
    expect(getArticleRecommendationsError(baseState as StateSchema)).toBe(
      "Failed to load recommendations"
    );
  });

  test("getArticleRecommendationsIsLoading when state is empty", () => {
    const emptyState = {} as StateSchema;
    expect(getArticleRecommendationsIsLoading(emptyState)).toBeUndefined();
  });

  test("getArticleRecommendationsError when state is empty", () => {
    const emptyState = {} as StateSchema;
    expect(getArticleRecommendationsError(emptyState)).toBeUndefined();
  });
});
