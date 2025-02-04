import React, { memo, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "react-study-desygn-system";
import { Text } from "shared/ui/Text/Text";
import "./LoginForm.css";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector, useStore } from "react-redux";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { loginByUsername } from "features/AuthByUserName/model/services/loginByUserName/loginByUsername";
import { TextTheme } from "shared/ui/Text/textConstants";
import { AppDispatch } from "app/providers/StoreProvider/config/config";
import { ReduxStoreWithManager } from "app/providers/StoreProvider";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsloading/getLoginIsLoading";

export interface ILoginFormProps {
  className?: string;
}
const LoginForm: React.FC<ILoginFormProps> = ({ className }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  const store = useStore() as ReduxStoreWithManager;

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUserName(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  useEffect(() => {
    store.reducerManager.add("loginForm", loginReducer);

    dispatch({ type: "@INIT loginForm reducer" });

    return () => {
      store.reducerManager.remove("loginForm");
      dispatch({ type: "@DESTROY loginForm reducer" });
    };
    // eslint-disable-next-line
  }, []);

  return (
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
  );
};

export default memo(LoginForm);
