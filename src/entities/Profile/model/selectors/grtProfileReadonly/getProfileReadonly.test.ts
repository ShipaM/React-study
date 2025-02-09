import { StateSchema } from "app/providers/StoreProvider";
import { getProfileReadonly } from "./getProfileReadonly";

describe("getProfileIsLoading", () => {
  test("should return true", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: false,
        readOnly: true,
      },
    };

    expect(getProfileReadonly(state as StateSchema)).toEqual(true);
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileReadonly(state as StateSchema)).toEqual(false);
  });
});
