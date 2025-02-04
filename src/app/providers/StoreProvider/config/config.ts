/* eslint-disable @typescript-eslint/ban-ts-comment */
import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
import { createReducerManager } from "./reducerManager";
import { DeepPartial } from "shared/types/deepPartial";
// import { loginReducer } from "features/AuthByUserName";

export function createReduxStore(
  initialState?: DeepPartial<StateSchema>,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    // loginForm: loginReducer,
  };
  const reducerManager = createReducerManager(rootReducers);
  const store = configureStore({
    reducer: reducerManager.reduce,
    preloadedState: initialState,
    devTools: __IS_DEV__,
  });

  //@ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

// ✅ Infer `RootState` and `AppDispatch`
export type RootState = ReturnType<
  ReturnType<typeof createReduxStore>["getState"]
>;
export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
