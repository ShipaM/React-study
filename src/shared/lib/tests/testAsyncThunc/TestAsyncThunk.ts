import { StateSchema } from "app/providers/StoreProvider";
import {
  AsyncThunkAction,
  Dispatch,
  ThunkDispatch,
  UnknownAction,
} from "@reduxjs/toolkit";
import axios, { AxiosStatic } from "axios";
// import { NavigateFunction } from "react-router-dom";

type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

jest.mock("axios");

const mockedAxios = axios as jest.MockedFunctionDeep<typeof axios>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<Dispatch>;

  getState: () => StateSchema;

  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

  api: jest.MockedFunctionDeep<AxiosStatic>;
  // navigate: jest.MockedFn<NavigateFunction>;

  constructor(
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
    state?: DeepPartial<StateSchema>
  ) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as StateSchema);

    this.api = mockedAxios;
    // this.navigate = jest.fn();
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
      {
        api: this.api,
        // navigate: this.navigate
      }
    );

    return result;
  }
}
