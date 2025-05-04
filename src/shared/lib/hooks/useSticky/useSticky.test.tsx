/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { render, act } from "@testing-library/react";
import { useSticky } from "./useSticky";

describe("useSticky", () => {
  let observeMock: jest.Mock;
  let unobserveMock: jest.Mock;
  let triggerEntry: ((entries: IntersectionObserverEntry[]) => void) | null =
    null;

  beforeEach(() => {
    observeMock = jest.fn();
    unobserveMock = jest.fn();

    global.IntersectionObserver = jest.fn(function (this: any, cb) {
      triggerEntry = cb;
      this.observe = observeMock;
      this.unobserve = unobserveMock;
    }) as any;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("sets isSticky to true when sentinel is not intersecting", () => {
    let isStickyValue = false;

    const TestComponent = () => {
      const { isSticky, sentinelRef } = useSticky({ top: 0 });
      isStickyValue = isSticky;

      return <div ref={sentinelRef}>Sentinel</div>;
    };

    render(<TestComponent />);

    // Simulate intersection callback
    act(() => {
      triggerEntry?.([{ isIntersecting: false } as IntersectionObserverEntry]);
    });

    expect(isStickyValue).toBe(true);
    expect(observeMock).toHaveBeenCalled();
  });

  it("sets isSticky to false when sentinel is intersecting", () => {
    let isStickyValue = true;

    const TestComponent = () => {
      const { isSticky, sentinelRef } = useSticky({ top: 0 });
      isStickyValue = isSticky;

      return <div ref={sentinelRef}>Sentinel</div>;
    };

    render(<TestComponent />);

    // Simulate intersection callback
    act(() => {
      triggerEntry?.([{ isIntersecting: true } as IntersectionObserverEntry]);
    });

    expect(isStickyValue).toBe(false);
  });
});
