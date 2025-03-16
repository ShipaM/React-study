import { EntityState } from "@reduxjs/toolkit";
import { Comment } from "entities/Comment/model/types/comment";

export interface ArticleDetailsCommentSchema
  extends EntityState<Comment, string> {
  isLoading?: boolean;
  error?: string;
}
