import { lazy } from "react";
import { AddCommentProps } from "./AddCommentForm";

export const AddCommentFormAsync = lazy<React.FC<AddCommentProps>>(
  () => import("./AddCommentForm")
);
