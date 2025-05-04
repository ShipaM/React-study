// useHover.test.tsx
import { render, fireEvent } from "@testing-library/react";
import { useHover } from "./useHover";

// Test component to use the useHover hook
const TestComponent = () => {
  const [isHover, { onMouseEnter, onMouseLeave }] = useHover();
  return (
    <div>
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        data-testid="hover-element"
      >
        {isHover ? "Hovered" : "Not Hovered"}
      </div>
    </div>
  );
};

describe("useHover", () => {
  it("should have an initial state of false (Not Hovered)", () => {
    const { getByTestId } = render(<TestComponent />);
    const element = getByTestId("hover-element");

    // Verify the initial text content of the element
    expect(element).toHaveTextContent("Not Hovered");
  });

  it("should change state to true when mouse enters", () => {
    const { getByTestId } = render(<TestComponent />);
    const element = getByTestId("hover-element");

    // Simulate the mouse entering the element
    fireEvent.mouseEnter(element);

    // Verify that the state has changed to true
    expect(element).toHaveTextContent("Hovered");
  });

  it("should change state back to false when mouse leaves", () => {
    const { getByTestId } = render(<TestComponent />);
    const element = getByTestId("hover-element");

    // Simulate the mouse entering the element
    fireEvent.mouseEnter(element);

    // Verify the state is true (hovered)
    expect(element).toHaveTextContent("Hovered");

    // Simulate the mouse leaving the element
    fireEvent.mouseLeave(element);

    // Verify the state is false (not hovered)
    expect(element).toHaveTextContent("Not Hovered");
  });
});
