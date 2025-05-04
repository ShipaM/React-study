/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from "react";
import { render, act } from "@testing-library/react";
import { useInfiniteScroll } from "./useInfiniteScroll";

describe("useInfiniteScroll", () => {
  let observeMock: jest.Mock;
  let unobserveMock: jest.Mock;

  beforeEach(() => {
    observeMock = jest.fn();
    unobserveMock = jest.fn();

    // Mock IntersectionObserver
    global.IntersectionObserver = jest.fn(function (this: any, callback) {
      this.observe = observeMock;
      this.unobserve = unobserveMock;
      this.disconnect = jest.fn();
      this.trigger = (entry: Partial<IntersectionObserverEntry>) => {
        callback([entry]);
      };
    }) as any;
  });

  it("calls the callback when the trigger element intersects", () => {
    const callback = jest.fn();

    const TestComponent = () => {
      const triggerRef = useRef<HTMLDivElement>(null);
      const wrapperRef = useRef<HTMLDivElement>(null);

      useInfiniteScroll({
        callback,
        triggerRef: triggerRef as React.RefObject<HTMLElement>,
        wrapperRef: wrapperRef as React.RefObject<HTMLElement>,
      });

      return (
        <div ref={wrapperRef}>
          <div ref={triggerRef}>Trigger</div>
        </div>
      );
    };

    render(<TestComponent />);

    // Manually trigger intersection
    act(() => {
      const mockObserverInstance = (IntersectionObserver as jest.Mock).mock
        .instances[0];
      mockObserverInstance.trigger({ isIntersecting: true });
    });

    expect(callback).toHaveBeenCalled();
    expect(observeMock).toHaveBeenCalled();
  });

  it("cleans up observer on unmount", () => {
    const callback = jest.fn();

    const TestComponent = () => {
      const triggerRef = useRef<HTMLDivElement>(null);
      const wrapperRef = useRef<HTMLDivElement>(null);

      useInfiniteScroll({
        callback,
        triggerRef: triggerRef as React.RefObject<HTMLElement>,
        wrapperRef: wrapperRef as React.RefObject<HTMLElement>,
      });

      return (
        <div ref={wrapperRef}>
          <div ref={triggerRef}>Trigger</div>
        </div>
      );
    };

    const { unmount } = render(<TestComponent />);
    unmount();

    expect(unobserveMock).toHaveBeenCalled();
  });
});
