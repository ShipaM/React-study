import React from "react";
import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page";

const About: React.FC = () => {
  const { t } = useTranslation("about");
  return <Page data-testid="about">{t("ABOUT_PAGE")}</Page>;
};

export default About;
