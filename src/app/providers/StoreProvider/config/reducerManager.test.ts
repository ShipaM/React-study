import { createReducerManager } from "./reducerManager";
import { Reducer, Action } from "@reduxjs/toolkit";
import { StateSchemaKey } from "./StateSchema";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";

// Mock reducers for testing
const mockReducerA: Reducer = (state = { value: 1 }, action: Action) => {
  switch (action.type) {
    case "INCREMENT_A":
      return { value: state.value + 1 };
    default:
      return state;
  }
};

const mockReducerB: Reducer = (state = { count: 0 }, action: Action) => {
  switch (action.type) {
    case "INCREMENT_B":
      return { count: state.count + 1 };
    default:
      return state;
  }
};

describe("Reducer Manager", () => {
  let reducerManager: ReturnType<typeof createReducerManager>;

  beforeEach(() => {
    reducerManager = createReducerManager({
      counter: counterReducer,
      user: userReducer,
    });
  });

  test("should initialize with static reducers", () => {
    expect(reducerManager.getReducerMap()).toEqual({
      counter: expect.any(Function),
      user: expect.any(Function),
    });
  });

  test("should add a reducer", () => {
    reducerManager.add("mockA" as StateSchemaKey, mockReducerA);
    expect(reducerManager.getReducerMap()).toHaveProperty("mockA");
  });

  test("should remove a reducer", () => {
    reducerManager.add("mockA" as StateSchemaKey, mockReducerA);
    reducerManager.remove("mockA" as StateSchemaKey);
    expect(reducerManager.getReducerMap()).not.toHaveProperty("mockA");
  });

  test("should handle actions with combined reducers", () => {
    reducerManager.add("mockA" as StateSchemaKey, mockReducerA);
    reducerManager.add("mockB" as StateSchemaKey, mockReducerB);

    let state = reducerManager.reduce(undefined, { type: "INCREMENT_A" });
    expect(state).toEqual({
      counter: { value: 0 },
      mockA: { value: 2 },
      mockB: { count: 0 },
      user: {},
    });

    state = reducerManager.reduce(state, { type: "INCREMENT_B" });
    expect(state).toEqual({
      counter: { value: 0 },
      mockA: { value: 2 },
      mockB: { count: 1 },
      user: {},
    });
  });

  test("should properly clean up removed reducers", () => {
    reducerManager.add("mockA" as StateSchemaKey, mockReducerA);
    reducerManager.add("mockB" as StateSchemaKey, mockReducerB);

    let state = reducerManager.reduce(undefined, { type: "INCREMENT_A" });
    expect(state).toEqual({
      counter: { value: 0 },
      mockA: { value: 2 },
      mockB: { count: 0 },
      user: {},
    });

    reducerManager.remove("mockA" as StateSchemaKey);
    state = reducerManager.reduce(state, { type: "INCREMENT_B" });
    expect(state).toEqual({
      counter: { value: 0 },
      mockB: { count: 1 },
      user: {},
    });
  });
});
