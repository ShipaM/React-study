import { articleDetailsCommentsReducer } from "./articleDetailsCommentsSlice";
import { fetchCommentsByArticleId } from "../services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { Comment } from "entities/Comment";
import { ArticleDetailsCommentsSchema } from "../types/ArticleDetailsCommentSchema";

describe("articleDetailsCommentsSlice", () => {
  const initialState: ArticleDetailsCommentsSchema = {
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  };

  it("should handle fetchCommentsByArticleId.pending", () => {
    const action = fetchCommentsByArticleId.pending(
      "requestId",
      undefined,
      "article-id"
    );
    const state = articleDetailsCommentsReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      isLoading: true,
      error: undefined,
    });
  });

  it("should handle fetchCommentsByArticleId.fulfilled", () => {
    const comments: Comment[] = [
      {
        id: "1",
        text: "Nice article",
        user: { id: "1", username: "User1", password: "123" },
      },
      {
        id: "2",
        text: "I disagree",
        user: { id: "2", username: "User2", password: "123" },
      },
    ];

    const action = fetchCommentsByArticleId.fulfilled(
      comments,
      "requestId",
      "article-id"
    );

    const state = articleDetailsCommentsReducer(initialState, action);

    expect(state.isLoading).toBe(false);
    expect(state.ids).toEqual(["1", "2"]);
    expect(state.entities).toEqual({
      "1": comments[0],
      "2": comments[1],
    });
  });

  it("should handle fetchCommentsByArticleId.rejected", () => {
    const action = fetchCommentsByArticleId.rejected(
      new Error("Failed to fetch"),
      "requestId",
      "article-id",
      "Server error"
    );
    const state = articleDetailsCommentsReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      isLoading: false,
      error: "Server error",
    });
  });
});
