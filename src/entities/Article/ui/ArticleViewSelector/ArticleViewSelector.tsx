import { classNames } from "shared/lib/classNames/classNames";
import React from "react";
import { memo } from "react";
import ListIcon from "shared/assets/icons/list-24-24.svg";
import TiledIcon from "shared/assets/icons/tiled-24-24.svg";
import { Icon } from "shared/ui/Icon/Icon";
import { Button } from "shared/ui/Button/Button";
import {
  ArticleView,
  ArticleViewValue,
} from "entities/Article/model/type/article";
import { ButtonTheme } from "shared/ui/Button/buttonConstants";
import "./ArticleViewSelector.css";

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleViewValue;
  onViewClick?: (view: ArticleViewValue) => void;
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: TiledIcon,
  },
  {
    view: ArticleView.BIG,
    icon: ListIcon,
  },
];

export const ArticleViewSelector: React.FC<ArticleViewSelectorProps> = memo(
  ({ className, view, onViewClick }) => {
    const onClick = (newView: ArticleViewValue) => () => {
      onViewClick?.(newView);
    };

    return (
      <div className={classNames("article-view-selector", {}, [className])}>
        {viewTypes.map((viewType) => (
          <Button
            theme={ButtonTheme.CLEAR}
            onClick={onClick(viewType.view)}
            key={viewType.view}
          >
            <Icon
              Svg={viewType.icon}
              className={classNames("", {
                ["not-selected"]: viewType.view !== view,
              })}
            />
          </Button>
        ))}
      </div>
    );
  }
);

ArticleViewSelector.displayName = "ArticleViewSelector";
