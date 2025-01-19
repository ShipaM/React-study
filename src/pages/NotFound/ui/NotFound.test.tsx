import React from "react";
import { render } from "@testing-library/react";
import { NotFound } from "./NotFound"; // Adjust the import path as necessary

// Mocking useTranslation hook
jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("NotFound component", () => {
  it("renders with default class and translated text", () => {
    const { getByText, container, getByTestId } = render(<NotFound />);

    // Verify that the component renders with the default class "not-found"
    const notFoundElement = container.firstChild;
    expect(notFoundElement).toHaveClass("not-found");

    // Verify that the component renders the translated text "PAGE_NOT_FOUND"
    expect(getByText("PAGE_NOT_FOUND")).toBeInTheDocument();
    expect(getByTestId("not-found")).toBeInTheDocument();
  });

  it("renders with additional className", () => {
    const { container } = render(<NotFound className="custom-class" />);

    // Verify that the component renders with both "not-found" and "custom-class" classes
    const notFoundElement = container.firstChild;
    expect(notFoundElement).toHaveClass("not-found");
    expect(notFoundElement).toHaveClass("custom-class");
  });
});
