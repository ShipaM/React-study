import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/config";
import { StateSchema } from "../config/StateSchema";
import { DeepPartial } from "shared/types/deepPartial";
import { ReducersMapObject } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

interface IStoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}
export const StoreProvider: React.FC<IStoreProviderProps> = ({
  children,
  initialState,
  asyncReducers,
}) => {
  const navigate = useNavigate();

  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
    navigate
  );

  return <Provider store={store}>{children}</Provider>;
};
