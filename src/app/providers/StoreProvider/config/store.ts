/* eslint-disable @typescript-eslint/ban-ts-comment */
import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { IThunkExtraArg, StateSchema } from "./StateSchema";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
import { createReducerManager } from "./reducerManager";
import { $api } from "shared/api/api";
import { scrollSaveReducer } from "features/ScrollSave/model/slices/ScrollSaveSlice";
// import { NavigateFunction } from "react-router-dom";
// import { loginReducer } from "features/AuthByUserName";

export const staticReducers = {
  counter: counterReducer,
  user: userReducer,
};

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
  // navigate?: NavigateFunction
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    scrollSave: scrollSaveReducer,
    // loginForm: loginReducer,
  };
  const reducerManager = createReducerManager(rootReducers);

  const extraArg: IThunkExtraArg = {
    api: $api,
    // navigate,
  };

  const store = configureStore({
    reducer: reducerManager.reduce,
    preloadedState: initialState,
    devTools: __IS_DEV__,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }),
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
