import {
  getArticlesPageIsLoading,
  getArticlesPageError,
  getArticlesPageView,
} from "./articlesPageSelectors";
import { StateSchema } from "app/providers/StoreProvider";
import { ArticleView } from "entities/Article/model/type/article";

describe("getArticlesPage selectors", () => {
  describe("getArticlesPageIsLoading", () => {
    it("should return true if isLoading is true", () => {
      const state: StateSchema = {
        articlesPage: { isLoading: true },
      } as StateSchema;
      expect(getArticlesPageIsLoading(state)).toBe(true);
    });

    it("should return false if isLoading is false", () => {
      const state: StateSchema = {
        articlesPage: { isLoading: false },
      } as StateSchema;
      expect(getArticlesPageIsLoading(state)).toBe(false);
    });

    it("should return false if articlesPage is undefined", () => {
      const state = {} as StateSchema;
      expect(getArticlesPageIsLoading(state)).toBe(false);
    });
  });

  describe("getArticlesPageError", () => {
    it("should return error message if error is defined", () => {
      const state: StateSchema = {
        articlesPage: { error: "Something went wrong" },
      } as StateSchema;
      expect(getArticlesPageError(state)).toBe("Something went wrong");
    });

    it("should return undefined if error is not defined", () => {
      const state: StateSchema = {
        articlesPage: {},
      } as StateSchema;
      expect(getArticlesPageError(state)).toBeUndefined();
    });

    it("should return undefined if articlesPage is undefined", () => {
      const state = {} as StateSchema;
      expect(getArticlesPageError(state)).toBeUndefined();
    });
  });

  describe("getArticlesPageView", () => {
    it("should return the view if defined", () => {
      const state: StateSchema = {
        articlesPage: { view: ArticleView.BIG },
      } as StateSchema;
      expect(getArticlesPageView(state)).toBe(ArticleView.BIG);
    });

    it("should return SMALL if view is undefined", () => {
      const state: StateSchema = {
        articlesPage: {},
      } as StateSchema;
      expect(getArticlesPageView(state)).toBe(ArticleView.SMALL);
    });

    it("should return SMALL if articlesPage is undefined", () => {
      const state = {} as StateSchema;
      expect(getArticlesPageView(state)).toBe(ArticleView.SMALL);
    });
  });
});
