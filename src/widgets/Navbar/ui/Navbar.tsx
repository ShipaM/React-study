import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Modal } from "shared/ui/Modal/Modal";
import React, { useCallback, useState } from "react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import "./Navbar.css";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames("navbar", {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className="links"
        onClick={onToggleModal}
      >
        {t("LOGIN")}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        123
      </Modal>
    </div>
  );
};
