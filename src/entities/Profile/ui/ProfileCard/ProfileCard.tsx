import React from "react";
import { useTranslation } from "react-i18next";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { Input } from "shared/ui/Input/Input";
import { Text } from "shared/ui/Text/Text";
import "./ProfileCard.css";
import { Profile } from "../../model/types/profile";
import { Loader } from "shared/ui/Loader/Loader";
import { TextTheme } from "shared/ui/Text/textConstants";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Country } from "shared/const/common";
import { Currency } from "entities/Currency/model/types/currency";
import { CurrencySelect } from "entities/Currency/ui/CurrencySelect";
import { CountrySelect } from "entities/Country";

interface IProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
  readOnly?: boolean;
}

export const ProfileCard: React.FC<IProfileCardProps> = ({
  className,
  data,
  isLoading,
  error,
  onChangeLastname,
  onChangeCity,
  onChangeAge,
  onChangeAvatar,
  onChangeUsername,
  onChangeCountry,
  onChangeCurrency,
  onChangeFirstname,
  readOnly,
}) => {
  const { t } = useTranslation("profile");

  const mods: Mods = {
    ["editing"]: !readOnly,
  };

  if (isLoading) {
    return (
      <div
        data-testid="profile-card-loader"
        className={classNames("profile-card", {}, [
          "profile-loading",
          className,
        ])}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={classNames("profile-card", {}, ["profile-error", className])}
      >
        <Text
          theme={TextTheme.ERROR}
          title={t("LOADING_ERROR")}
          text={t("RELOAD_PAGE")}
        />
      </div>
    );
  }

  return (
    <div className={classNames("profile-card", mods, [className])}>
      <div className={classNames("profile-card-data", {}, [className])}>
        {data?.avatar && (
          <div className="profile-card-avatar-wrapper">
            <Avatar src={data?.avatar} alt="avatar" />
          </div>
        )}
        <Input
          value={data?.firstname ?? ""}
          data-tesId="input-firstname"
          placeholder={t("FIRST_NAME")}
          className="profile-card-input"
          onChange={onChangeFirstname}
          readOnly={readOnly}
        />
        <Input
          value={data?.lastname ?? ""}
          data-tesId="input-lastname"
          placeholder={t("LAST_NAME")}
          className="profile-card-input"
          onChange={onChangeLastname}
          readOnly={readOnly}
        />
        <Input
          value={data?.age}
          data-tesId="input-age"
          placeholder={t("AGE")}
          className="profile-card-input"
          onChange={onChangeAge}
          readOnly={readOnly}
        />
        <Input
          value={data?.city ?? ""}
          data-tesId="input-city"
          placeholder={t("CITY")}
          className="profile-card-input"
          onChange={onChangeCity}
          readOnly={readOnly}
        />
        <Input
          value={data?.username ?? ""}
          data-tesId="input-username"
          placeholder={t("USERNAME")}
          className="profile-card-input"
          onChange={onChangeUsername}
          readOnly={readOnly}
        />
        <Input
          value={data?.avatar ?? ""}
          data-tesId="input-avatar"
          placeholder={t("AVATAR")}
          className="profile-card-input"
          onChange={onChangeAvatar}
          readOnly={readOnly}
        />
        <CurrencySelect
          className="profile-card-select"
          data-tesId="select-currency"
          value={data?.currency}
          onChange={onChangeCurrency}
          readOnly={readOnly}
        />
        <CountrySelect
          className="profile-card-select"
          data-tesId="select-country"
          value={data?.country}
          onChange={onChangeCountry}
          readOnly={readOnly}
        />
      </div>
    </div>
  );
};
