import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import React from "react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface ILangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher: React.FC<ILangSwitcherProps> = ({
  className,
  short,
}) => {
  const { t, i18n } = useTranslation();
  const toggle = async () => {
    i18n.changeLanguage(i18n.language === "ua" ? "en" : "ua");
  };

  return (
    <Button
      data-testid="lang-switcher"
      className={classNames("LangSwitcher", {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggle}
    >
      {t(short ? "SHORT_LANGUAGE" : "LANGUAGE")}
    </Button>
  );
};
