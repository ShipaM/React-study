import { createSelector } from "@reduxjs/toolkit";
import { SidebarItemType } from "../types/sidebar";
import AboutIcon from "shared/assets/icons/about-20-20.svg";
import MainIcon from "shared/assets/icons/main-20-20.svg";
import ProfileIcon from "shared/assets/icons/profile-20-20.svg";
import ArticleIcon from "shared/assets/icons/article-20-20.svg";
import { RoutePath } from "shared/config/routerConfig/routeConfig";
import { getUserAuthData } from "entities/User";

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: RoutePath.main,
      Icon: MainIcon,
      text: "MAIN",
    },
    {
      path: RoutePath.about,
      Icon: AboutIcon,
      text: "ABOUT",
    },
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        path: RoutePath.profile + userData.id,
        Icon: ProfileIcon,
        text: "PROFILE",
        authOnly: true,
      },
      {
        path: RoutePath.articles,
        Icon: ArticleIcon,
        text: "ARTICLES",
        authOnly: true,
      }
    );
  }

  return sidebarItemsList;
});
