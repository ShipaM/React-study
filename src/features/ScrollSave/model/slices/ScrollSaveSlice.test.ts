import { scrollSaveReducer, scrollSaveActions } from "./ScrollSaveSlice"; // Adjust import path accordingly
import { ScrollSaveSchema } from "../types/ScrollSaveSchema"; // Adjust import path accordingly

describe("scrollSaveSlice", () => {
  // Test initial state
  it("should return the initial state", () => {
    const initialState: ScrollSaveSchema = { scroll: {} };

    // Check if the initial state is as expected
    expect(scrollSaveReducer(undefined, { type: "unknown" })).toEqual(
      initialState
    );
  });

  // Test the setScrollPosition action
  it("should handle setScrollPosition action", () => {
    const initialState: ScrollSaveSchema = { scroll: {} };
    const action = scrollSaveActions.setScrollPosition({
      path: "/home",
      position: 200,
    });

    const newState = scrollSaveReducer(initialState, action);

    // Verify that the scroll position is set correctly
    expect(newState.scroll["/home"]).toBe(200);
  });

  // Test if setScrollPosition works with multiple scroll paths
  it("should handle multiple setScrollPosition actions", () => {
    const initialState: ScrollSaveSchema = { scroll: {} };

    const action1 = scrollSaveActions.setScrollPosition({
      path: "/home",
      position: 100,
    });
    const action2 = scrollSaveActions.setScrollPosition({
      path: "/about",
      position: 200,
    });

    const stateAfterAction1 = scrollSaveReducer(initialState, action1);
    const stateAfterAction2 = scrollSaveReducer(stateAfterAction1, action2);

    // Verify both paths have been updated correctly
    expect(stateAfterAction2.scroll["/home"]).toBe(100);
    expect(stateAfterAction2.scroll["/about"]).toBe(200);
  });

  // Test if updating the same path overwrites the previous value
  it("should overwrite previous scroll position for the same path", () => {
    const initialState: ScrollSaveSchema = { scroll: { "/home": 100 } };
    const action = scrollSaveActions.setScrollPosition({
      path: "/home",
      position: 200,
    });

    const newState = scrollSaveReducer(initialState, action);

    // Verify that the new position has overwritten the old one
    expect(newState.scroll["/home"]).toBe(200);
  });
});
