import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import "./Navbar.css";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface INavbaProps {
  className?: string;
}

export const Navbar: FC<INavbaProps> = ({ className }) => {
  return (
    <div className={classNames("navbar", {}, [className])}>
      <ThemeSwitcher />
      <div className={classNames("links")}>
        <AppLink className={classNames("main-link")} to={"/"}>
          Main
        </AppLink>
        <AppLink to={"/about"}>About</AppLink>
      </div>
    </div>
  );
};
