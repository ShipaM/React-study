import { act, renderHook } from "@testing-library/react";
import { useThrottle } from "./useThrottle"; // Import your hook

jest.useFakeTimers(); // Use fake timers for controlling setTimeout

describe("useThrottle", () => {
  it("should call the callback only once within the delay period", () => {
    const callback = jest.fn();
    const delay = 1000;

    // Render the hook
    const { result } = renderHook(() => useThrottle(callback, delay));

    // Simulate multiple calls to the throttled function
    act(() => {
      result.current(); // First call
      result.current(); // Second call within the delay (should not trigger callback)
      result.current(); // Third call within the delay (should not trigger callback)
    });

    // Expect callback to be called only once initially
    expect(callback).toHaveBeenCalledTimes(1);

    // Fast-forward time to simulate the delay passing
    act(() => {
      jest.advanceTimersByTime(delay);
    });

    // After the delay, the callback can be called again
    act(() => {
      result.current(); // Call after the delay
    });

    // Now, expect the callback to be called again
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it("should not call the callback if no time has passed", () => {
    const callback = jest.fn();
    const delay = 500;

    // Render the hook
    const { result } = renderHook(() => useThrottle(callback, delay));

    // Simulate multiple calls to the throttled function
    act(() => {
      result.current(); // First call
      result.current(); // Second call within the delay
    });

    // Expect callback to be called only once
    expect(callback).toHaveBeenCalledTimes(1);

    // Fast-forward time to simulate the delay passing
    act(() => {
      jest.advanceTimersByTime(delay);
    });

    // Now, expect the callback to be called again
    act(() => {
      result.current(); // After the delay
    });

    // Expect callback to have been called twice now
    expect(callback).toHaveBeenCalledTimes(2);
  });
});
