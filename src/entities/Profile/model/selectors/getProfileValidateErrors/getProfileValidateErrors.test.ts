import { StateSchema } from "app/providers/StoreProvider";
import { getProfileValidateErrors } from "./getProfileValidateErrors";
import { ValidateProfileError } from "../../types/profile";

describe("getProfileValidateErrors", () => {
  test("should return expected result", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: false,
        readOnly: false,
        validateError: [
          ValidateProfileError.INCORRECT_COUNTRY,
          ValidateProfileError.SERVER_ERROR,
        ],
      },
    };

    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      "INCORRECT_COUNTRY",
      "SERVER_ERROR",
    ]);
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
