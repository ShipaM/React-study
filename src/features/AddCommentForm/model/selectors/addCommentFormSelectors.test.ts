import {
  getAddCommentFormText,
  getAddCommentFormError,
} from "./addCommentFormSelectors";
import { StateSchema } from "app/providers/StoreProvider";

describe("addCommentForm selectors", () => {
  describe("getAddCommentFormText", () => {
    it("should return the text from state when available", () => {
      const state: DeepPartial<StateSchema> = {
        addCommentForm: {
          text: "Test comment",
        },
      };
      expect(getAddCommentFormText(state as StateSchema)).toBe("Test comment");
    });

    it("should return an empty string if text is not set", () => {
      const state: DeepPartial<StateSchema> = {
        addCommentForm: {},
      };
      expect(getAddCommentFormText(state as StateSchema)).toBe("");
    });

    it("should return an empty string if addCommentForm is undefined", () => {
      const state: DeepPartial<StateSchema> = {};
      expect(getAddCommentFormText(state as StateSchema)).toBe("");
    });
  });

  describe("getAddCommentFormError", () => {
    it("should return the error from state when available", () => {
      const state: DeepPartial<StateSchema> = {
        addCommentForm: {
          error: "Some error",
        },
      };
      expect(getAddCommentFormError(state as StateSchema)).toBe("Some error");
    });

    it("should return undefined if error is not set", () => {
      const state: DeepPartial<StateSchema> = {
        addCommentForm: {},
      };
      expect(getAddCommentFormError(state as StateSchema)).toBeUndefined();
    });

    it("should return undefined if addCommentForm is undefined", () => {
      const state: DeepPartial<StateSchema> = {};
      expect(getAddCommentFormError(state as StateSchema)).toBeUndefined();
    });
  });
});
