import { StateSchema } from "app/providers/StoreProvider";
import { getUserAuthData } from "./getUserAuthData";

describe("getUserAuthData", () => {
  test("should return expected result", () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: { id: "1", username: "admin", password: "123" },
      },
    };

    expect(getUserAuthData(state as StateSchema)).toEqual({
      id: "1",
      username: "admin",
      password: "123",
    });
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getUserAuthData(state as StateSchema)).toEqual(undefined);
  });
});
