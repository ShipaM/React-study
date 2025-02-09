import { StateSchema } from "app/providers/StoreProvider";
import { UserSchema } from "../types/user";
import { userActions, userReducer } from "./userSlice";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

describe("userSlice", () => {
  test("should set auth data", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(
      userReducer(
        state as UserSchema,
        userActions.setAuthData({ id: "1", username: "admin", password: "123" })
      )
    ).toEqual({ authData: { id: "1", username: "admin", password: "123" } });
  });

  test("should initialize auth data from localStorage", () => {
    const user = { id: "1", username: "testUser", password: "123" };
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(user));

    const state = userReducer(undefined, userActions.initAuthData());
    expect(state.authData).toEqual(user);
  });

    test("should remove auth data on logout", () => {
      const initialState = {
        authData: { id: "1", username: "testUser", password: "123" },
      };
      const state = userReducer(initialState, userActions.logout());
      expect(state.authData).toBeUndefined();
      expect(localStorage.getItem(USER_LOCALSTORAGE_KEY)).toBeNull();
    });
});
