/* eslint-disable react/display-name */
import React, { memo } from "react";
import "./SidebarItem.css";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLinkTheme } from "shared/ui/AppLink/appLinkConstants";
import { ISidebarItemType } from "widgets/Sidebar/model/items";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";

interface ISidebarItemProps {
  item: ISidebarItemType;
  collapsed: boolean;
  className?: string;
}

export const SidebarItem: React.FC<ISidebarItemProps> = memo(
  ({ item, collapsed, className }) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) return null;

    return (
      <AppLink
        to={item.path}
        theme={AppLinkTheme.SECONDARY}
        className={classNames("item", { ["collapsed"]: collapsed }, [
          className,
        ])}
      >
        {<item.Icon className="icon" />}
        <span className="link">{t(item.text)}</span>
      </AppLink>
    );
  }
);
