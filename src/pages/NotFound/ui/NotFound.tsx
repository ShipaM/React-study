import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import "./NotFound.css";
import React from "react";

interface NotFoundPageProps {
  className?: string;
}

export const NotFound: React.FC<NotFoundPageProps> = ({
  className,
}: NotFoundPageProps) => {
  const { t } = useTranslation();
  return (
    <div
      data-testid="not-found"
      className={classNames("not-found", {}, [className])}
    >
      {t("PAGE_NOT_FOUND")}
    </div>
  );
};
