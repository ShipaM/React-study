import { StateSchema } from "app/providers/StoreProvider";
import { getLoginState } from "./getLoginState";

describe("getLoginIsLoading", () => {
  test("should return true", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: false,
        username: "admin",
        password: "123",
      },
    };

    expect(getLoginState(state as StateSchema)).toEqual({
      isLoading: false,
      password: "123",
      username: "admin",
    });
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginState(state as StateSchema)).toEqual(undefined);
  });
});
