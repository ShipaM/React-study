import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import React, { useCallback, useState } from "react";
import { Button } from "shared/ui/Button/Button";
import "./Navbar.css";
import { ButtonTheme } from "shared/ui/Button/buttonConstants";
import { LoginModal } from "features/AuthByUserName";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const dispatch = useDispatch();

  const authData = useSelector(getUserAuthData);

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
      <div className={classNames("navbar", {}, [className])}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className="links"
          onClick={onLogout}
        >
          {t("LOGOUT")}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames("navbar", {}, [className])}>
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
    </div>
  );
};
