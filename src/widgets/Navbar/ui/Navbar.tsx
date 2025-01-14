import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import "./Navbar.css";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routerConfig/routeConfig";
import { useTranslation } from "react-i18next";

interface INavbaProps {
  className?: string;
}

export const Navbar: FC<INavbaProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames("navbar", {}, [className])}>
      <div className={classNames("links")}>
        <AppLink className={classNames("main-link")} to={RoutePath.main}>
          <span className="link">{t("NAV_MAIN_LINK")}</span>
        </AppLink>
        <AppLink to={RoutePath.about}>
          <span className="link">{t("NAV_ABOUT_LINK")}</span>
        </AppLink>
      </div>
    </div>
  );
};
