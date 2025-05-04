// useAppDispatch.test.tsx
import { render } from "@testing-library/react";
import { useAppDispatch } from "./useAppDispatch";
import { useDispatch } from "react-redux";
import { Action } from "@reduxjs/toolkit";

// Mocking `useDispatch` from react-redux
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

describe("useAppDispatch", () => {
  it("should return a dispatch function", () => {
    const dispatchMock = jest.fn();
    (useDispatch as unknown as jest.Mock).mockReturnValue(dispatchMock); // Mocking useDispatch to return dispatchMock

    const TestComponent = () => {
      const dispatch = useAppDispatch();
      dispatch("test-action" as unknown as Action); // Calling dispatch

      return <div>Test</div>;
    };

    render(<TestComponent />);

    // Check if the mock dispatch function was called
    expect(dispatchMock).toHaveBeenCalledWith("test-action");
  });

  it("should be typed correctly", () => {
    const dispatchMock = jest.fn();
    (useDispatch as unknown as jest.Mock).mockReturnValue(dispatchMock);

    const TestComponent = () => {
      const dispatch = useAppDispatch();
      dispatch("test-action" as unknown as Action);

      return <div>Test</div>;
    };

    render(<TestComponent />);

    // Ensure the dispatch was called with the correct argument
    expect(dispatchMock).toHaveBeenCalledWith("test-action");
  });
});
