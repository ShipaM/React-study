import { profileReducer } from "entities/Profile";
import React from "react";
import { useTranslation } from "react-i18next";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const initialReducers: ReducersList = { profile: profileReducer };

const Profile: React.FC = () => {
  const { t } = useTranslation("profile");
  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div>{t("PROFILE_PAGE")}</div>
    </DynamicModuleLoader>
  );
};

export default Profile;
