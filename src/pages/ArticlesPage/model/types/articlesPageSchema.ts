import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleViewValue } from "entities/Article";
import {
  ArticleSortField,
  ArticleType,
} from "entities/Article/model/type/article";
import { SortOrder } from "shared/types/sortOrder";

export interface ArticlesPageSchema extends EntityState<Article, string> {
  isLoading?: boolean;
  error?: string;

  //pagination
  page: number;
  limit: number;
  hasMore: boolean;

  //filters
  view: ArticleViewValue;
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: ArticleType;

  _inited: boolean;
}
