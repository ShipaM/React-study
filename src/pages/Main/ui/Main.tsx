import React from "react";
import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page";
const Main: React.FC = () => {
  const { t } = useTranslation("main");
  return (
    <Page data-testid="main">
      {/* <BugButton /> */}
      {t("MAIN_PAGE")}
    </Page>
  );
};

export default Main;
