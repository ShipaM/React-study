import {
  fetchProfileData,
  ProfileCard,
  profileReducer,
} from "entities/Profile";
import React, { useEffect } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

const initialReducers: ReducersList = { profile: profileReducer };

const Profile: React.FC = () => {
  // const { t } = useTranslation("profile");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames("profile", {}, [])}>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  );
};

export default Profile;
