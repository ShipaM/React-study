import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileValidateErrors,
  profileActions,
  ProfileCard,
  profileReducer,
  ValidateProfileError,
} from "entities/Profile";
import React, { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ProfileHeader } from "./ProfileHeader/ProfileHeader";
import { getProfileReadonly } from "entities/Profile/model/selectors/grtProfileReadonly/getProfileReadonly";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { TextTheme } from "shared/ui/Text/textConstants";
import { Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Page } from "widgets/Page";
import { VStack } from "shared/ui/Stack";

const initialReducers: ReducersList = { profile: profileReducer };

const Profile: React.FC = () => {
  const { t } = useTranslation("profile");
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readOnly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorsTranslates = {
    [ValidateProfileError.INCORRECT_AGE]: t("INCORRECT_AGE"),
    [ValidateProfileError.INCORRECT_COUNTRY]: t("INCORRECT_COUNTRY"),
    [ValidateProfileError.INCORRECT_USER_DATA]: t("INCORRECT_USER_DATA"),
    [ValidateProfileError.NO_DATA]: t("NO_DATA"),
    [ValidateProfileError.SERVER_ERROR]: t("SERVER_ERROR"),
  };

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ firstname: value || "" }));
    },
    [dispatch]
  );

  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value }));
    },
    [dispatch]
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value }));
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value }));
    },
    [dispatch]
  );

  const onChangeCountry = useCallback(
    (country: Country) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch]
  );
  const onChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    },
    [dispatch]
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value }));
    },
    [dispatch]
  );

  useEffect(() => {
    if (__PROJECT__ !== "storybook" && id) dispatch(fetchProfileData(id));
  }, [dispatch, id]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <Page data-testid="profile" className={classNames("profile", {}, [])}>
        <VStack gap="16" max>
          <ProfileHeader />
          {validateErrors?.length &&
            validateErrors?.map((err) => (
              <Text
                theme={TextTheme.ERROR}
                text={validateErrorsTranslates[err]}
                key={err}
              />
            ))}
          <ProfileCard
            data={formData}
            isLoading={isLoading}
            error={error}
            onChangeLastname={onChangeLastname}
            onChangeAge={onChangeAge}
            onChangeCity={onChangeCity}
            onChangeAvatar={onChangeAvatar}
            onChangeUsername={onChangeUsername}
            onChangeCountry={onChangeCountry}
            onChangeCurrency={onChangeCurrency}
            onChangeFirstname={onChangeFirstname}
            readOnly={readOnly}
          />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default Profile;
