import React, { useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ButtonTheme } from "shared/ui/Button/buttonConstants";
import { Text } from "shared/ui/Text/Text";
import "./ProfileHeader.css";
import { useTranslation } from "react-i18next";
import { getProfileReadonly } from "entities/Profile/model/selectors/grtProfileReadonly/getProfileReadonly";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { profileActions } from "entities/Profile/model/slice/profileSlice";
import { Button } from "shared/ui/Button/Button";
import { updateProfileData } from "entities/Profile/model/services/updateProfileData/updateProfileData";

export const ProfileHeader = () => {
  const { t } = useTranslation("profile");
  const readOnly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEditProfile());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames("profile-header", {}, [])}>
      <Text title={t("PROFILE")} />

      {readOnly ? (
        <Button
          theme={ButtonTheme.OUTLINE}
          className="edit-btn"
          onClick={onEdit}
        >
          {t("EDIT")}
        </Button>
      ) : (
        <div className={classNames("profile-header", {}, [])}>
          <Button
            theme={ButtonTheme.OUTLINE_RED}
            className="edit-btn"
            onClick={onCancelEdit}
          >
            {t("CANCEL")}
          </Button>
          <Button
            theme={ButtonTheme.OUTLINE}
            className="save-btn"
            onClick={onSave}
          >
            {t("SAVE")}
          </Button>
        </div>
      )}
    </div>
  );
};
