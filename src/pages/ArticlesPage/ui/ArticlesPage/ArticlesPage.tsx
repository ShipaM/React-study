import React from "react";
import "./ArticlesPage.css";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

interface IArticlesPageProps {
  className?: string;
}

const ArticlesPage: React.FC<IArticlesPageProps> = ({ className }) => {
  const { t } = useTranslation("article");
  return (
    <div className={classNames("article-page", {}, [className])}>
      {t("ARTICLE_PAGE")}
    </div>
  );
};

export default ArticlesPage;
