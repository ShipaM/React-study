import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleViewValue } from "entities/Article";

export interface ArticlesPageSchema extends EntityState<Article, string> {
  isLoading?: boolean;
  error?: string;

  view: ArticleViewValue;

  //pagination
  page: number;
  limit?: number;
  hasMore: boolean;

  _inited: boolean;
}
