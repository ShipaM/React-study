import React, { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "react-study-desygn-system";
import { Text } from "shared/ui/Text/Text";
import "./LoginForm.css";
import { Input } from "shared/ui/Input/Input";
import { useSelector } from "react-redux";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../model/services/loginByUserName/loginByUsername";
import { TextTheme } from "shared/ui/Text/textConstants";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsloading/getLoginIsLoading";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

export interface ILoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = { loginForm: loginReducer };

const LoginForm: React.FC<ILoginFormProps> = ({ className, onSuccess }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  // const store = useStore() as ReduxStoreWithManager;

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(async () => {
    const res = await dispatch(loginByUsername({ username, password }));
    if (res?.meta?.requestStatus === "fulfilled") onSuccess();
  }, [dispatch, password, username, onSuccess]);

  // useEffect(() => {
  //   store.reducerManager.add("loginForm", loginReducer);

  //   dispatch({ type: "@INIT loginForm reducer" });

  //   return () => {
  //     store.reducerManager.remove("loginForm");
  //     dispatch({ type: "@DESTROY loginForm reducer" });
  //   };
  //   // eslint-disable-next-line
  // }, []);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames("login-form", {}, [className])}>
        <Text title={t("LOGIN")} className="login-title" />
        {error && (
          <Text className="login-error" text={error} theme={TextTheme.ERROR} />
        )}
        <Input
          className={classNames("input", {}, [className])}
          type="text"
          data-testid="user-name"
          onChange={onChangeUsername}
          placeholder={t("ENTER_USERNAME")}
          autoFocus
          value={username}
        />
        <Input
          className={classNames("input", {}, [className])}
          type="text"
          data-testid="user-password"
          onChange={onChangePassword}
          placeholder={t("ENTER_USERPASSWORD")}
          value={password}
        />
        <Button
          theme="outline"
          className={classNames("login-btn", {}, [className])}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t("LOGIN")}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(LoginForm);
