import React from "react";
import AboutIcon from "shared/assets/icons/about-20-20.svg";
import MainIcon from "shared/assets/icons/main-20-20.svg";
import ProfileIcon from "shared/assets/icons/profile-20-20.svg";
import { RoutePath } from "shared/config/routerConfig/routeConfig";

export interface ISidebarItemType {
  path: string;
  text: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: ISidebarItemType[] = [
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
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: "PROFILE",
  },
];
