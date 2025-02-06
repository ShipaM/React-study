import { StateSchema } from "app/providers/StoreProvider";
import { getProfileIsLoading } from "./getLoginIsLoading";

describe("getProfileIsLoading", () => {
  test("should return true", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
        readonly: false,
      },
    };

    expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileIsLoading(state as StateSchema)).toEqual(false);
  });
});
