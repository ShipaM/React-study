import { combineReducers } from "@reduxjs/toolkit";
import { ArticleDetailsPageSchema } from "../types";
import { articleDetailsCommentsReducer } from "./articleDetailsCommentsSlice";
import { articleDetailsPageRecommendationsReducer } from "./articleDetailsPageRecommendationsSlice";
import { ArticleDetailsRecommendationsSchema } from "../types/ArticleDetailsRecommendationSchema";
import { ArticleDetailsCommentsSchema } from "../types/ArticleDetailsCommentSchema";

export const articleDetailsPageReducer =
  combineReducers<ArticleDetailsPageSchema>({
    recommendations:
      articleDetailsPageRecommendationsReducer as unknown as ArticleDetailsRecommendationsSchema,
    comments:
      articleDetailsCommentsReducer as unknown as ArticleDetailsCommentsSchema,
  });
