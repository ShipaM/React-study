import React, { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Comment } from "../../model/types/comment";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Text } from "shared/ui/Text/Text";
import "./CommentCard.css";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routerConfig/routeConfig";

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard: React.FC<CommentCardProps> = memo(
  ({ className, comment, isLoading }) => {
    if (isLoading) {
      return (
        <div className={classNames("comment-card", {}, [className, "loading"])}>
          <div className="comment-card-header">
            <Skeleton
              width={30}
              height={30}
              border="50%"
              className="comment-card-avatar"
            />
            <Skeleton height={16} width={100} />
          </div>
          <Skeleton width={"100%"} height={50} />
        </div>
      );
    }

    if (!comment) return null;

    return (
      <div className={classNames("comment-card", {}, [className])}>
        <AppLink
          className="comment-card-header"
          to={`${RoutePath.profile}${comment.user.id}`}
        >
          {comment.user.avatar ? (
            <Avatar
              size={30}
              className="comment-card-avatar"
              src={comment.user.avatar}
            />
          ) : null}
          <Text title={comment.user.username} className="comment-card-text" />
        </AppLink>
        <Text text={comment.text} />
      </div>
    );
  }
);

CommentCard.displayName = "CommentCard";
