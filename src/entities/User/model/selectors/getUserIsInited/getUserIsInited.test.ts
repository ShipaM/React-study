import { StateSchema } from "app/providers/StoreProvider";
import { getUserIsInited } from "./getUserIsInited";

describe("getLoginIsLoading", () => {
  it("should return true when _isInited is true", () => {
    const state: StateSchema = {
      user: { _isInited: true },
    } as StateSchema;

    expect(getUserIsInited(state)).toBe(true);
  });

  it("should return false when _isInited is false", () => {
    const state: StateSchema = {
      user: { _isInited: false },
    } as StateSchema;

    expect(getUserIsInited(state)).toBe(false);
  });

  it("should return undefined when user is missing", () => {
    const state = {} as StateSchema;

    expect(getUserIsInited(state)).toBeUndefined();
  });

  it("should return undefined when _isInited is missing", () => {
    const state: StateSchema = {
      user: {},
    } as StateSchema;

    expect(getUserIsInited(state)).toBeUndefined();
  });
});
