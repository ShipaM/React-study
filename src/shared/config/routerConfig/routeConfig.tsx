import { AboutAsyncPage } from "pages/About/ui/About.async";
import { MainAsyncPage } from "pages/Main/ui/Main.async";
import { RouteProps } from "react-router-dom";
import React from "react";
import { NotFound } from "pages/NotFound";
import { ProfileAsyncPage } from "pages/ProfilePage";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",

  NOT_FOUND = "not-found",
}

//Record<T, U>
// Утилита предназначена для создания типа объекта, Record<Keys, Types>, где Keys - имена свойств объекта, а Types - типы значений свойств.

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PROFILE]: "/profile",

  [AppRoutes.NOT_FOUND]: "*",
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
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfileAsyncPage />,
  },

  [AppRoutes.NOT_FOUND]: {
    path: RoutePath["not-found"],
    element: <NotFound />,
  },
};
