import React, { useCallback, useEffect, useRef, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import "./Modal.css";
import { Portal } from "../Portal/Portal";

interface IModalProps {
  className?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal: React.FC<IModalProps> = ({
  className,
  children,
  isOpen,
  onClose,
  lazy,
}) => {
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  //ReturnType is the data type that a function or method returns as a result of its execution. Simply put, this is what you get from the function when it completes its work.

  // function add(a: number, b: number): number {
  //   return a + b;
  // }

  // TypeScript automatically infers that the return type is number
  // type AddReturnType = ReturnType<typeof add>; // The type of AddReturnType will be number

  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeHandler();
      }
    },
    [closeHandler]
  );

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const mods: Record<string, boolean> = {
    ["opened"]: isOpen,
    ["is-closing"]: isClosing,
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [isOpen, onKeyDown]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        data-testid="modal"
        className={classNames("modal", mods, [className])}
      >
        <div data-testid="overlay" className="overlay" onClick={closeHandler}>
          <div
            data-testid="content"
            className="content"
            onClick={onContentClick}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
