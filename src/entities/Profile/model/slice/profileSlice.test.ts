import {
  fetchProfileData,
  profileActions,
  profileReducer,
  ProfileSchema,
  updateProfileData,
  ValidateProfileError,
} from "entities/Profile";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

const data = {
  username: "admin",
  age: 22,
  country: Country.Ukraine,
  lastname: "ulbi tv",
  firstname: "asd",
  city: "asf",
  currency: Currency.USD,
};

const initialState: ProfileSchema = {
  isLoading: false,
  readOnly: true,
  data: undefined,
  error: undefined,
  form: undefined,
};

describe("profileSlice.test", () => {
  test("test set readonly", () => {
    const state: DeepPartial<ProfileSchema> = { readOnly: false };
    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(true))
    ).toEqual({ readOnly: true });
  });

  test("test cancel edit", () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: "" } };

    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEditProfile())
    ).toEqual({
      readOnly: true,
      validateErrors: [],
      data,
      form: data,
    });
  });

  test("test update profile", () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: "123" } };

    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({
          username: "123456",
        })
      )
    ).toEqual({
      form: { username: "123456" },
    });
  });

  test("test update profile service pending", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };

    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending as never)
    ).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test("test update profile service fullfiled", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };

    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, "")
      )
    ).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readOnly: true,
      form: data,
      data,
    });
  });

  it("should handle updateProfileData.rejected", () => {
    const error = "Invalid credentials";

    const nextState = profileReducer(initialState, {
      type: updateProfileData.rejected.type,
      payload: error,
    });

    expect(nextState.isLoading).toBe(false);
    expect(nextState.validateErrors).toBe(error);
  });

  it("should handle fetchProfileData.pending", () => {
    const nextState = profileReducer(
      initialState,
      fetchProfileData.pending as never
    );
    expect(nextState.isLoading).toBe(true);
    expect(nextState.error).toBeUndefined();
  });

  it("should handle fetchProfileData.fulfilled", () => {
    const nextState = profileReducer(
      initialState,
      fetchProfileData.fulfilled(data, "")
    );

    expect(nextState.isLoading).toBe(false);
    expect(nextState.data).toEqual(data);
    expect(nextState.form).toEqual(data);
  });

  it("should handle fetchProfileData.rejected", () => {
    const error = "Failed to fetch profile";
    const nextState = profileReducer(initialState, {
      type: fetchProfileData.rejected.type,
      payload: error,
    });

    expect(nextState.isLoading).toBe(false);
    expect(nextState.error).toBe(error);
  });
});
