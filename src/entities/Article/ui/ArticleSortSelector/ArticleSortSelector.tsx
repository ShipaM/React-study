import { ArticleSortField } from "entities/Article/model/type/article";
import React, { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { SortOrder } from "shared/types/sortOrder";
import { ISelectOption, Select } from "shared/ui/Select/Select";
import "./ArticleSortSelector.css";

type ArticleSortSelectorProps = {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
};
export const ArticleSortSelector: React.FC<ArticleSortSelectorProps> = memo(
  ({ className, onChangeOrder, onChangeSort, order, sort }) => {
    const { t } = useTranslation("articles");

    const orderOptions = useMemo<ISelectOption<SortOrder>[]>(
      () => [
        {
          value: "asc",
          content: t("ASC"),
        },
        {
          value: "desc",
          content: t("DESC"),
        },
      ],
      [t]
    );

    const sortFieldOptions = useMemo<ISelectOption<ArticleSortField>[]>(
      () => [
        {
          value: ArticleSortField.CREATED,
          content: t("DATE"),
        },
        {
          value: ArticleSortField.TITLE,
          content: t("TITLE"),
        },
        {
          value: ArticleSortField.VIEWS,
          content: t("VIEWS"),
        },
      ],
      [t]
    );

    // const changeSortHandler = useCallback(
    //   (newSort: string) => {
    //     onChangeSort?.(newSort as ArticleSortField);
    //   },
    //   [onChangeSort]
    // );

    // const changeOrderHandler = useCallback(
    //   (newOrder: string) => {
    //     onChangeOrder?.(newOrder as SortOrder);
    //   },
    //   [onChangeOrder]
    // );

    return (
      <div
        data-testid="article-sort-selector"
        className={classNames("article-sort-selector", {}, [className])}
      >
        <Select<ArticleSortField>
          value={sort}
          onChange={onChangeSort}
          options={sortFieldOptions}
          label={t("SORT_BY")}
        />
        <Select<SortOrder>
          value={order}
          onChange={onChangeOrder}
          options={orderOptions}
          label={t("BY")}
          className="order"
        />
      </div>
    );
  }
);

ArticleSortSelector.displayName = "ArticleSortSelector";
