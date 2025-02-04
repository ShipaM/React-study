import { StateSchema } from "app/providers/StoreProvider";
import { getLoginUsername } from "./getLoginUsername";
import { DeepPartial } from "shared/types/deepPartial";

describe("getLoginUsername", () => {
  test("should return true", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: "admin",
      },
    };

    expect(getLoginUsername(state as StateSchema)).toEqual("admin");
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginUsername(state as StateSchema)).toEqual("");
  });
});
