import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/config";
import { StateSchema } from "../config/StateSchema";

interface IStoreProviderProps {
  children?: ReactNode;
  initialState?: StateSchema;
}

export const StoreProvider: React.FC<IStoreProviderProps> = ({
  children,
  initialState,
}) => {
  const store = createReduxStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};
