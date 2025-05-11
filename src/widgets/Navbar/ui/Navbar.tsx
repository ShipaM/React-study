import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import React, { memo, useCallback, useState } from "react";
import { Button } from "shared/ui/Button/Button";
import "./Navbar.css";
import { ButtonTheme } from "shared/ui/Button/buttonConstants";
import { LoginModal } from "features/AuthByUserName";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";
import { Text } from "shared/ui/Text/Text";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routerConfig/routeConfig";
import { TextTheme } from "shared/ui/Text/textConstants";

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation("translation");
  const [isAuthModal, setIsAuthModal] = useState(false);
  const dispatch = useDispatch();

  const authData = useSelector(getUserAuthData);
  console.log(authData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <header className={classNames("navbar", {}, [className])}>
        <Text
          className="app-name"
          title={t("APP_NAME")}
          theme={TextTheme.INVERTED}
        />
        <AppLink to={RoutePath.article_create} className="create-article-btn">
          {t("CREATE_ARTICLE")}
        </AppLink>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className="links"
          onClick={onLogout}
        >
          {t("LOGOUT")}
        </Button>
      </header>
    );
  }

  return (
    <header className={classNames("navbar", {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className="links"
        onClick={onShowModal}
      >
        {t("LOGIN")}
      </Button>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal}></LoginModal>
      )}
    </header>
  );
});

Navbar.displayName = "Navbar";
