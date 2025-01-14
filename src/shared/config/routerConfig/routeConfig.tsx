import { AboutAsyncPage } from "pages/About/ui/About.async";
import { MainAsyncPage } from "pages/Main/ui/Main.async";
import { RouteProps } from "react-router-dom";
import React from "react";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}

//Record<T, U>
// Утилита предназначена для создания типа объекта, Record<Keys, Types>, где Keys - имена свойств объекта, а Types - типы значений свойств.

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainAsyncPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutAsyncPage />,
  },
};
