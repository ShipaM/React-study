import React from "react";
import { useTranslation } from "react-i18next";

const Main: React.FC = () => {
  const { t } = useTranslation("main");
  return <div>{t("MAIN_PAGE")}</div>;
};

export default Main;
