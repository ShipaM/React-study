import React, { memo, ReactNode, RefObject, useRef } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import "./Page.css";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { geScrollSaveByPath, scrollSaveActions } from "features/ScrollSave";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { StateSchema } from "app/providers/StoreProvider";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useThrottle } from "shared/lib/hooks/useThrottle/useThrottle";

type PageProps = {
  className?: string;
  children?: ReactNode;
  onScrollEnd?: () => void;
  "data-testid"?: string;
};
export const Page: React.FC<PageProps> = memo(
  ({ className, children, onScrollEnd, "data-testid": dataTestId }) => {
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();

    const scrollPosition = useSelector((state: StateSchema) =>
      geScrollSaveByPath(state, pathname)
    );

    const wrapperRef = useRef<HTMLDivElement>(
      null
    ) as RefObject<HTMLDivElement>;
    const triggerRef = useRef<HTMLDivElement>(
      null
    ) as RefObject<HTMLDivElement>;

    useInfiniteScroll({
      triggerRef,
      wrapperRef,
      callback: onScrollEnd,
    });

    const onScroll = useThrottle((e: React.UIEvent<HTMLDivElement>) => {
      dispatch(
        scrollSaveActions.setScrollPosition({
          position: e.currentTarget.scrollTop,
          path: pathname,
        })
      );
    }, 1000);

    useInitialEffect(() => {
      wrapperRef.current.scrollTop = scrollPosition;
    });

    return (
      <section
        ref={wrapperRef}
        data-testid={dataTestId}
        className={classNames("page", {}, [className])}
        onScroll={onScroll}
      >
        {children}
        {onScrollEnd ? <div className="trigger" ref={triggerRef} /> : null}
      </section>
    );
  }
);

Page.displayName = "Page";
