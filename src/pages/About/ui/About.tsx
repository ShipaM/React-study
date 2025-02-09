import React from "react";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation("about");
  return <div data-testid="about">{t("ABOUT_PAGE")}</div>;
};

export default About;
