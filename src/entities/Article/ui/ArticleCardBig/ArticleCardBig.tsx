import React, { HTMLAttributeAnchorTarget, JSX, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { t } from "i18next";
import { Button } from "react-study-desygn-system";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { ButtonTheme } from "shared/ui/Button/buttonConstants";
import { Card } from "shared/ui/Card/Card";
import {
  Article,
  ArticleTextBlock,
  ArticleViewValue,
} from "../../model/type/article";
import { Text } from "shared/ui/Text/Text";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routerConfig/routeConfig";

type ArticleCardBigProps = {
  className?: string;
  article: Article;
  view?: ArticleViewValue;
  types: JSX.Element;
  views: JSX.Element;
  onOpenArticle?: () => void;
  textBlock: ArticleTextBlock;
  target?: HTMLAttributeAnchorTarget;
};

export const ArticleCardBig: React.FC<ArticleCardBigProps> = memo(
  ({ className, article, view, types, views, textBlock, target }) => {
    return (
      <div
        data-testid="article-card-big"
        className={classNames("article-list-item", {}, [className, view])}
      >
        <Card className="article-list-card">
          <div className="article-list-card-header">
            <Avatar
              src={article.user.avatar}
              size={30}
              className="article-list-card-avatar"
            />
            <Text
              text={article.user.username}
              className="article-list-card-user-name"
            />
            <Text text={article.createdAt} className="article-list-card-date" />
          </div>
          <Text text={article.title} className="article-list-card-title" />
          {types}
          <img src={article.img} alt="article-img" className="article-img" />
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className="article-text-block"
            />
          )}
          <div className="footer">
            <AppLink
              to={`${RoutePath["article-details"]}${article.id}`}
              target={target}
            >
              <Button theme={ButtonTheme.OUTLINE}>{t("READ_MORE")}</Button>
            </AppLink>

            {views}
          </div>
        </Card>
      </div>
    );
  }
);

ArticleCardBig.displayName = "ArticleCardBig";
