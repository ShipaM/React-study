import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { User, userActions } from "entities/User";
import { loginByUsername } from "./loginByUsername";
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunc/TestAsyncThunk";

jest.mock("axios");

const mockedAxios = jest.mocked(axios as jest.Mocked<typeof axios>, {
  shallow: true,
});

describe("loginByUsername.test", () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test("success login", async () => {
    const userValue = { username: "123", id: "1" };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
    const action = loginByUsername({ username: "123", password: "123" });
    const result = await action(dispatch, getState, undefined);
    console.log(result);

    expect(dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValue as User)
    );
    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(userValue);
  });

  test("error login", async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const action = loginByUsername({ username: "123", password: "123" });
    const result = await action(dispatch, getState, undefined);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("ERROR_MESSAGE");
  });

  test("success login using mockResolvedValue", async () => {
    const userValue = { username: "123", id: "1" };
    mockedAxios.post.mockResolvedValue({ data: userValue });
    const action = loginByUsername({ username: "123", password: "123" });
    const result = await action(dispatch, getState, undefined);
    console.log(result);

    expect(dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValue as User)
    );
    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(userValue);
  });

  test("error login using mockResolvedValue", async () => {
    mockedAxios.post.mockResolvedValue(Promise.resolve({ status: 403 }));
    const action = loginByUsername({ username: "123", password: "123" });
    const result = await action(dispatch, getState, undefined);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("ERROR_MESSAGE");
  });

  test("success login using TestAsyncThunk", async () => {
    const userValue = { username: "123", id: "1" };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: "123", password: "123" });

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValue as User)
    );
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(userValue);
  });

  test("error login using TestAsyncThunk", async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: "123", password: "123" });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("ERROR_MESSAGE");
  });
});
