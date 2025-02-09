import { loginActions, loginReducer } from "./loginSlice";
import { LoginSchema } from "../types/LoginSchema";
import { Action } from "@reduxjs/toolkit";
import { loginByUsername } from "../services/loginByUserName/loginByUsername";

describe("loginSlice", () => {
  test("test set username", () => {
    const state: DeepPartial<LoginSchema> = {
      isLoading: false,
      username: "",
      password: "",
    };

    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername("admin"))
    ).toEqual({ username: "admin", password: "", isLoading: false });
  });

  test("test set password", () => {
    const state: DeepPartial<LoginSchema> = { password: "" };

    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword("123"))
    ).toEqual({ password: "123" });
  });

    test("should set isLoading to true on loginByUsername.pending", () => {
      const state = loginReducer(
        undefined,
        loginByUsername.pending as unknown as Action
      );
      expect(state.isLoading).toBe(true);
      expect(state.error).toBeUndefined();
    });

    test("should set isLoading to false on loginByUsername.fulfilled", () => {
      const state = loginReducer(
        { isLoading: true, username: "", password: "" },
        loginByUsername.fulfilled as unknown as Action
      );
      expect(state.isLoading).toBe(false);
    });

    test("should set error and isLoading to false on loginByUsername.rejected", () => {
      const error = "Invalid credentials";
      const state = loginReducer(
        { isLoading: true, username: "", password: "" },
        { type: loginByUsername.rejected.type, payload: error }
      );
      expect(state.isLoading).toBe(false);
      expect(state.error).toBe(error);
    });
});
