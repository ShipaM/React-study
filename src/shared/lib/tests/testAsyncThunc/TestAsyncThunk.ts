import { StateSchema } from "app/providers/StoreProvider";
import {
  AsyncThunkAction,
  Dispatch,
  ThunkDispatch,
  UnknownAction,
} from "@reduxjs/toolkit";
import { AxiosStatic } from "axios";
import { NavigateFunction } from "react-router-dom";

type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<Dispatch>;

  getState: () => StateSchema;

  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

  api: jest.MockedFunctionDeep<AxiosStatic> | undefined;
  navigate: jest.MockedFn<NavigateFunction> | undefined;

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(
      this.dispatch as unknown as ThunkDispatch<
        unknown,
        unknown,
        UnknownAction
      >,
      this.getState,
      { api: this.api, navigate: this.navigate }
    );

    return result;
  }
}
