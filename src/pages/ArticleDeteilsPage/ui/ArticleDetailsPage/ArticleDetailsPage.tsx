import React from "react";
import "./ArticleDetailsPage.css";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { ArticleDetails } from "entities/Article";
import { useParams } from "react-router-dom";

interface IArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: React.FC<IArticleDetailsPageProps> = ({
  className,
}) => {
  const { t } = useTranslation("article");
  const { id } = useParams<{ id: string }>();

  if (!id)
    return (
      <div className={classNames("article-details-page", {}, [className])}>
        {t("ARTICLE_NOT_FOUND")}
      </div>
    );
  return (
    <div className={classNames("article-details-page", {}, [className])}>
      <ArticleDetails id={id} />
    </div>
  );
};

export default ArticleDetailsPage;
