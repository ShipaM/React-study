import { ArticleDetailsCommentsSchema } from "pages/ArticleDeteilsPage";
import { ArticleDetailsRecommendationsSchema } from "./ArticleDetailsRecommendationSchema";

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentsSchema;
  recommendations: ArticleDetailsRecommendationsSchema;
}
