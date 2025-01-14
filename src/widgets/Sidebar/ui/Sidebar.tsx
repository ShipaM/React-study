import { classNames } from "shared/lib/classNames/classNames";
import "./Sidebar.css";
import React, { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher/ui/ThemeSwitcher";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import MainIcon from "shared/assets/icons/main-20-20.svg";
import AboutIcon from "shared/assets/icons/about-20-20.svg";
import { RoutePath } from "shared/config/routerConfig/routeConfig";
import { LangSwitcher } from "widgets/LangSwitcher";

interface ISidebarProps {
  className?: string;
}

export const Sidebar: React.FC<ISidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames("sidebar", { ["collapsed"]: collapsed }, [
        className,
      ])}
    >
      <Button
        theme={ButtonTheme.BACKGROUND_INVERTED}
        data-testid="sidebar-toggler"
        onClick={onToggle}
        className={classNames("collapse-btn", {}, [className])}
        square
        size={ButtonSize.L}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={classNames("items", {}, [className])}>
        <AppLink
          to={RoutePath.main}
          theme={AppLinkTheme.SECONDARY}
          className={classNames("item", {}, [className])}
        >
          <MainIcon className="icon" />
          <span className="link">{t("NAV_MAIN_LINK")}</span>
        </AppLink>
        <AppLink
          to={RoutePath.about}
          theme={AppLinkTheme.SECONDARY}
          className={classNames("item", {}, [className])}
        >
          <AboutIcon className="icon" />
          <span className="link">{t("NAV_ABOUT_LINK")}</span>
        </AppLink>
      </div>
      <div className={classNames("switchers", {}, [className])}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className="lang" />
      </div>
    </div>
  );
};
