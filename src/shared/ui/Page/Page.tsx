import React, { memo, ReactNode, RefObject, useRef } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import "./Page.css";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";

type PageProps = {
  className?: string;
  children?: ReactNode;
  onScrollEnd?: () => void;
  "data-testid"?: string;
};
export const Page: React.FC<PageProps> = memo(
  ({ className, children, onScrollEnd, "data-testid": dataTestId }) => {
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
    return (
      <section
        ref={wrapperRef}
        data-testid={dataTestId}
        className={classNames("page", {}, [className])}
      >
        {children}
        <div ref={triggerRef} />
      </section>
    );
  }
);

Page.displayName = "Page";
