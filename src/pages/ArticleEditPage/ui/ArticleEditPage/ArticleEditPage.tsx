import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { useParams } from "react-router-dom";
import { Page } from "widgets/Page";

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = (props: ArticleEditPageProps) => {
  const { className } = props;
  const { t } = useTranslation("article");
  const { id } = useParams<{ id: string }>();
  console.log(id);
  const isEdit = Boolean(id);

  return (
    <Page className={classNames("article-edit-page", {}, [className])}>
      {isEdit ? t("EDIT_ARTICLE_BY_ID") + id : t("CREATE_NEW_ARTICLE")}
    </Page>
  );
};

export default memo(ArticleEditPage);
