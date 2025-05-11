import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { getArticleDetailsData } from "entities/Article/model/selectors/articleDetails";
import { RoutePath } from "shared/config/routerConfig/routeConfig";
import { ButtonTheme } from "shared/ui/Button/buttonConstants";
import "./ArticleDetailsPageHeader.css";
import { getCanEditArticle } from "pages/ArticleDeteilsPage/model/selectors/article";

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo(
  (props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation("article");
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
      navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
      navigate(`${RoutePath.article_details}${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
      <div
        data-testid="article-details-page-header"
        className={classNames("article-details-page-header", {}, [className])}
      >
        <Button
          data-testid="back-to-list-button"
          theme={ButtonTheme.OUTLINE}
          onClick={onBackToList}
        >
          {t("BACK_TO_LIST")}
        </Button>
        {canEdit && (
          <Button
            data-testid="edit-article-button"
            className="edit-btn"
            theme={ButtonTheme.OUTLINE}
            onClick={onEditArticle}
          >
            {t("EDIT")}
          </Button>
        )}
      </div>
    );
  }
);

ArticleDetailsPageHeader.displayName = "ArticleDetailsPageHeader";
