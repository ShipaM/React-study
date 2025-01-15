import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import "./PageError.css";
import React from "react";

interface ErrorPageProps {
  className?: string;
}

export const PageError: React.FC<ErrorPageProps> = ({
  className,
}: ErrorPageProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames("error-page", {}, [className])}>
      <p>{t("AN_UNEXPECTED_ERROR")}</p>
      <Button onClick={reloadPage}>{t("RELOAD_PAGE")}</Button>
    </div>
  );
};
