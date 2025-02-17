import { AboutAsyncPage } from "pages/About/ui/About.async";
import { MainAsyncPage } from "pages/Main/ui/Main.async";
import { RouteProps } from "react-router-dom";
import React from "react";
import { NotFound } from "pages/NotFound";
import { ProfileAsyncPage } from "pages/ProfilePage";
import { ArticlesAsyncPage } from "pages/ArticlesPage";
import { ArticleDetailsAsyncPage } from "pages/ArticleDeteilsPage/ui/ArticleDetailsPage/ArticleDetailsPage.async";

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  ARTICLES = "articles",
  ARTICLE_DETAILS = "article-details",

  NOT_FOUND = "not-found",
}

//Record<T, U>
// Утилита предназначена для создания типа объекта, Record<Keys, Types>, где Keys - имена свойств объекта, а Types - типы значений свойств.

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PROFILE]: "/profile",
  [AppRoutes.ARTICLES]: "/articles",
  [AppRoutes.ARTICLE_DETAILS]: "/articles/",

  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
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
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePath.articles,
    element: <ArticlesAsyncPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: `${RoutePath["article-details"]}:id`,
    element: <ArticleDetailsAsyncPage />,
    authOnly: true,
  },

  [AppRoutes.NOT_FOUND]: {
    path: RoutePath["not-found"],
    element: <NotFound />,
  },
};
