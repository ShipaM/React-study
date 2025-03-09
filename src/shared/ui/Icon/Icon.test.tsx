import React from "react";
import { render } from "@testing-library/react";
import { Icon } from "./Icon";

// Mock SVG component for testing
const MockSvg: React.FunctionComponent<React.SVGProps<SVGSVGElement>> = () => (
  <svg className="icon custom-class" />
);

describe("Icon Component", () => {
  it("renders with className and Svg component", () => {
    const { container } = render(
      <Icon Svg={MockSvg} className="custom-class" />
    );
    const iconElement = container.querySelector(".icon");

    expect(iconElement).toBeInTheDocument(); // Ensure the icon container is in the document
    expect(iconElement).toHaveClass("custom-class"); // Check if custom class is applied
  });

  it("renders without crashing", () => {
    const { container } =  render(<Icon Svg={MockSvg} />);
    // If it renders without errors, the test passes

   expect(container).toBeInTheDocument()
  });
});
