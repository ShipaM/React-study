import React from "react";
import "./ArticlesPage.css";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleList } from "entities/Article";
import { ArticleView } from "entities/Article/model/type/article";
import { articles } from "shared/lib/tests/mocks/articleMock";

type IArticlesPageProps = {
  className?: string;
};

const ArticlesPage: React.FC<IArticlesPageProps> = ({ className }) => {
  return (
    <div className={classNames("article-page", {}, [className])}>
      <ArticleList view={ArticleView.SMALL} articles={articles} />
    </div>
  );
};

export default ArticlesPage;
