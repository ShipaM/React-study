import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticleDetailsSchema } from "../type/articleDetailsSchema";
import { fetchArticleById } from "../services/fetchArticleById/fetchArticleById";
import { Article } from "../type/article";

const initialState: ArticleDetailsSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
};

export const articleDetails = createSlice({
  name: "articleDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchArticleById.fulfilled,
        (state, action: PayloadAction<Article>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: articleDetailsActions } = articleDetails;
export const { reducer: articleDetailsReducer } = articleDetails;
