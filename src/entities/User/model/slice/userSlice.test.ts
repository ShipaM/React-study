import { StateSchema } from "app/providers/StoreProvider";
import { UserSchema } from "../types/user";
import { userActions, userReducer } from "./userSlice";

describe("userSlice", () => {
  test("test set auth data", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(
      userReducer(
        state as UserSchema,
        userActions.setAuthData({ id: "1", username: "admin", password: "123" })
      )
    ).toEqual({ authData: { id: "1", username: "admin", password: "123" } });
  });
});
