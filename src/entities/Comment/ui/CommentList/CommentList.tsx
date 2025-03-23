import React, { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { CommentCard } from "../CommentCard/CommentCard";
import { Text } from "shared/ui/Text/Text";
import { Comment } from "../../model/types/comment";
import { useTranslation } from "react-i18next";

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList: React.FC<CommentListProps> = memo(
  ({ className, comments, isLoading }) => {
    const { t } = useTranslation("article");

    if (isLoading) {
      return (
        <div className="comment-list">
          <CommentCard isLoading />
          <CommentCard isLoading />
          <CommentCard isLoading />
        </div>
      );
    }

    return (
      <div className={classNames("comment-list", {}, [className])}>
        {comments?.length ? (
          comments.map((comment) => (
            <CommentCard
              isLoading={isLoading}
              className="comment"
              key={comment.id}
              comment={comment}
            />
          ))
        ) : (
          <Text text={t("NO_COMMENTS")} />
        )}
      </div>
    );
  }
);

CommentList.displayName = "CommentList";
