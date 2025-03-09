import React, { memo, useCallback, useEffect } from "react";
import "./ArticleDetails.css";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { useSelector } from "react-redux";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "../../model/selectors/articleDetails";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";
import { AlignItems, TextSize } from "shared/ui/Text/textConstants";
import { Avatar } from "shared/ui/Avatar/Avatar";
import EyeIcon from "shared/assets/icons/eye-20-20.svg";
import CalendarIcon from "shared/assets/icons/calendar-20-20.svg";
import { Icon } from "shared/ui/Icon/Icon";
import { ArticleBlock, ArticleBlockType } from "../../model/type/article";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { ArticleDetailsSkeleton } from "./ArticleDetailsSkeleton/ArticleDetailsSkeleton";
interface IArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails: React.FC<IArticleDetailsProps> = memo(
  ({ className, id }) => {
    const { t } = useTranslation("article");
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    const renderBlock = useCallback((block: ArticleBlock) => {
      switch (block.type) {
        case ArticleBlockType.CODE:
          return (
            <ArticleCodeBlockComponent
              key={block.id}
              block={block}
              className="block"
            />
          );
        case ArticleBlockType.IMAGE:
          return (
            <ArticleImageBlockComponent
              key={block.id}
              block={block}
              className="block"
            />
          );
        case ArticleBlockType.TEXT:
          return (
            <ArticleTextBlockComponent
              key={block.id}
              className="block"
              block={block}
            />
          );
        default:
          return null;
      }
    }, []);

    useEffect(() => {
      if (__PROJECT__ !== "storybook") {
        dispatch(fetchArticleById(id));
      }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
      content = <ArticleDetailsSkeleton />;
    } else if (error) {
      content = (
        <Text alignItems={AlignItems.CENTER} title={t("ARTICLE_ERROR")} />
      );
    } else {
      content = (
        <>
          <div className="avatar-wrapper">
            <Avatar size={200} src={article?.img} className="avatar" />
          </div>
          <Text
            title={article?.title}
            text={article?.subtitle}
            className="title"
            size={TextSize.L}
          />
          <div className="article-info">
            <Icon Svg={EyeIcon} />
            <Text text={String(article?.views)} />
          </div>
          <div className="article-info">
            <Icon Svg={CalendarIcon} />
            <Text text={article?.createdAt} />
          </div>
          {article?.blocks.map(renderBlock)}
        </>
      );
    }
    return (
      <DynamicModuleLoader removeAfterUnmount={true} reducers={reducers}>
        <div className={classNames("article-details", {}, [className])}>
          {content}
        </div>
      </DynamicModuleLoader>
    );
  }
);

ArticleDetails.displayName = "ArticleDetails";
