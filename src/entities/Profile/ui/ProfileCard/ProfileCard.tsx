import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { ButtonTheme } from "shared/ui/Button/buttonConstants";
import { Input } from "shared/ui/Input/Input";
import { Text } from "shared/ui/Text/Text";
import "./ProfileCard.css";

interface IProfileCardProps {
  className?: string;
}

export const ProfileCard: React.FC<IProfileCardProps> = ({ className }) => {
  const { t } = useTranslation("profile");

  const data = useSelector(getProfileData);
  // const isLoading = useSelector(getProfileIsLoading);
  // const error = useSelector(getProfileError);

  return (
    <div className={classNames("profile-card", {}, [className])}>
      <div className={classNames("profile-card-header", {}, [className])}>
        <Text title={t("PROFILE")} />

        <Button theme={ButtonTheme.OUTLINE} className="edit-btn">
          {t("EDIT")}
          {data?.country}
        </Button>
      </div>
      <div className={classNames("profile-card-data", {}, [className])}>
        <Input
          value={data?.firstname ?? ""}
          placeholder={t("FIRST_NAME")}
          className="profile-card-input"
        />
        <Input
          value={data?.lastname ?? ""}
          placeholder={t("LAST_NAME")}
          className="profile-card-input"
        />
      </div>
    </div>
  );
};
