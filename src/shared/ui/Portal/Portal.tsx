import React from "react";
import { createPortal } from "react-dom";

interface IPortalProps {
  children: React.ReactNode;
  element?: HTMLElement;
}

export const Portal: React.FC<IPortalProps> = ({
  children,
  element = document.body,
}) => {
  return createPortal(children, element);
};
