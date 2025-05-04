import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Page } from "./Page";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { scrollSaveActions } from "features/ScrollSave";
import { RoutePath } from "shared/config/routerConfig/routeConfig";
import { useLocation } from "react-router-dom";

// Mocking hooks
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

jest.mock("shared/lib/hooks/useInfiniteScroll/useInfiniteScroll", () => ({
  useInfiniteScroll: jest.fn(),
}));

jest.mock("shared/lib/hooks/useAppDispatch/useAppDispatch", () => ({
  useAppDispatch: jest.fn(),
}));

jest.mock("features/ScrollSave", () => ({
  geScrollSaveByPath: jest.fn(),
  scrollSaveActions: {
    setScrollPosition: jest.fn(),
  },
}));

jest.mock("react-router-dom", () => ({
  useLocation: jest.fn(),
}));

describe("Page Component", () => {
  const mockDispatch = jest.fn();
  const mockOnScrollEnd = jest.fn();

  beforeEach(() => {
    // Mocking the Redux store and functions
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (useLocation as jest.Mock).mockReturnValue({ pathname: RoutePath.main });
    (useSelector as unknown as jest.Mock).mockReturnValue(100); // Mock initial scroll position
    (useInfiniteScroll as jest.Mock).mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render Page component", () => {
    render(<Page>Test Content</Page>);

    // Check if the content is rendered
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("should call onScroll and dispatch setScrollPosition when scrolled", async () => {
    render(
      <Page data-testid="page" onScrollEnd={mockOnScrollEnd}>
        Test Content
      </Page>
    );

    // Simulate scroll event
    const pageWrapper = screen.getByTestId("page");
    fireEvent.scroll(pageWrapper, { target: { scrollTop: 500 } });

    // Check that the dispatch is called with correct position
    expect(mockDispatch).toHaveBeenCalledWith(
      scrollSaveActions.setScrollPosition({
        position: 500,
        path: RoutePath.main,
      })
    );
  });

  it("should restore the scroll position on mount", () => {
    render(<Page data-testid="page">Test Content</Page>);

    // Check if the scroll position was set correctly after mounting
    expect(screen.getByTestId("page")).toHaveProperty("scrollTop", 100);
  });

  it("should apply custom className", () => {
    render(
      <Page data-testid="page" className="custom-class">
        Test Content
      </Page>
    );

    // Ensure the custom class is applied
    expect(screen.getByTestId("page")).toHaveClass("custom-class");
  });

  it("should pass the data-testid prop", () => {
    render(<Page data-testid="custom-page">Test Content</Page>);

    // Ensure that the data-testid is applied correctly
    expect(screen.getByTestId("custom-page")).toBeInTheDocument();
  });
});
