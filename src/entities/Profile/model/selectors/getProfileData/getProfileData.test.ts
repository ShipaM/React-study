import { StateSchema } from "app/providers/StoreProvider";
import { getProfileData } from "./getProfileData";
import { Country } from "shared/const/common";
import { Currency } from "entities/Currency/model/types/currency";

describe("getProfileData", () => {
  test("should return expected result", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {
          firstname: "Maksym",
          lastname: "Shypytsia",
          age: 39,
          country: Country.Ukraine,
          currency: Currency.UAH,
          city: "Kharkiv",
          username: "admin",
          avatar:
            "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg",
        },
        isLoading: false,
        readOnly: false,
      },
    };

    expect(getProfileData(state as StateSchema)).toEqual({
      username: "admin",
      age: 39,
      avatar:
        "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg",
      city: "Kharkiv",
      country: "Ukraine",
      currency: "UAH",
      firstname: "Maksym",
      lastname: "Shypytsia",
    });
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
