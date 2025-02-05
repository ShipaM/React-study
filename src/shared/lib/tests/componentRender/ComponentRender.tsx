import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import React from "react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import i18nForTests from "shared/config/i18n/i18nForTests";
import { DeepPartial } from "shared/types/deepPartial";
import { ReducersMapObject } from "@reduxjs/toolkit";
import { loginReducer } from "features/AuthByUserName/model/slice/loginSlice";

export interface componentRenderOptions {
  route?: string;
  initialState?: StateSchema;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}
const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
};

export function componentRender(
  component: ReactNode,
  options: componentRenderOptions = {}
) {
  const { route = "/", initialState, asyncReducers } = options;

  return render(
    <StoreProvider
      initialState={initialState}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>,
      </MemoryRouter>
      ,
    </StoreProvider>
  );
}
