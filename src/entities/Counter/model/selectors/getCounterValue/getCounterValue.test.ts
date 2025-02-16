import { StateSchema } from "app/providers/StoreProvider";
import { getCounterValue } from "./getCounterValue";

describe("getCounterValue.test", () => {
  test("should return counter value", () => {
    const state: StateSchema = {
      counter: { value: 10 },
      user: { _isInited: false },
    };
    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
});
