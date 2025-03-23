import React, { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Input } from "shared/ui/Input/Input";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import { ButtonTheme } from "shared/ui/Button/buttonConstants";
import { getAddCommentFormText } from "../../model/selectors/addCommentFormSelectors";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import "./AddCommentForm.css";
import {
  addCommentFormActions,
  addCommentFormReducer,
} from "../../model/slices/addCommentFormSlice";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export type AddCommentProps = {
  className?: string;
  onSendComment: (text: string) => void;
};

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm: React.FC<AddCommentProps> = ({
  className,
  onSendComment,
}) => {
  const { t } = useTranslation("article");

  const text = useSelector(getAddCommentFormText);

  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch]
  );
  const onSendHandler = useCallback(() => {
    onSendComment(text);
    onCommentTextChange("");
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames("add-comment-form", {}, [className])}>
        <Input
          data-tesId="add-comment-form-input"
          className="input"
          placeholder={t("ENTER_TEXT")}
          value={text}
          onChange={onCommentTextChange}
        />
        <Button theme={ButtonTheme.OUTLINE} onClick={onSendHandler}>
          {t("SEND")}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(AddCommentForm);
