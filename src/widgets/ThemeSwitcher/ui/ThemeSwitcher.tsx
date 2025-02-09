 
/* eslint-disable react/display-name */
import { useTheme } from "app/providers/ThemeProvider";
import React, { memo } from "react";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";
import { classNames } from "shared/lib/classNames/classNames";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import LightIcon from "shared/assets/icons/theme-light.svg";
import { Button } from "shared/ui/Button/Button";
import { ButtonTheme } from "shared/ui/Button/buttonConstants";

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<IThemeSwitcherProps> = memo(
  ({ className }) => {
    const { theme, toggleTheme } = useTheme();

    return (
      <Button
        data-testid="theme-switcher"
        theme={ButtonTheme.CLEAR}
        className={classNames("theme-switcher", {}, [className ?? ""])}
        onClick={toggleTheme}
      >
        {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
      </Button>
    );
  }
);
