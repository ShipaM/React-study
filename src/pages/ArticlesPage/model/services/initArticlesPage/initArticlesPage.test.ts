import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunc/TestAsyncThunk";
import { ArticlesPageSchema } from "../../types/articlesPageSchema";
import { initArticlesPage } from "./initArticlesPage";

jest.mock("../fetchArticlesList/fetchArticlesList");
const mockedFetchArticlesList = fetchArticlesList as jest.MockedFunction<
  typeof fetchArticlesList
>;

describe("initArticlesPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("calls fetchArticlesList and sets state when not inited", async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 1,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        _inited: false,
      } as unknown as ArticlesPageSchema,
    });

    const searchParams = new URLSearchParams({
      order: "asc",
      sort: "views",
      search: "redux",
    });

    await thunk.callThunk(searchParams);

    expect(thunk.dispatch).toHaveBeenCalledTimes(7);
    expect(fetchArticlesList).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledWith(fetchArticlesList({}));

    expect(mockedFetchArticlesList).toHaveBeenCalledWith({});
  });

  test("does nothing when already inited", async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
        _inited: true,
      } as unknown as ArticlesPageSchema,
    });

    const searchParams = new URLSearchParams();

    await thunk.callThunk(searchParams);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedFetchArticlesList).not.toHaveBeenCalled();
  });
});
