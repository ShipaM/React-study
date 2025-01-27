import { Button } from "shared/ui/Button/Button";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { ButtonTheme } from "./buttonConstants";
// Create a mock for the useTranslation hook

describe("Button", () => {
  test("renders the button with children text", () => {
    render(<Button>Click Me</Button>);

    // Check if the button renders with the correct text
    expect(screen.getByRole("button")).toHaveTextContent("Click Me");
  });

  test("applies the correct classes based on the theme", () => {
    render(<Button theme={ButtonTheme.CLEAR}>Clear</Button>);

    // Check if the 'clear' theme is applied correctly
    const button = screen.getByText("Clear");
    expect(button).toHaveClass(ButtonTheme.CLEAR);
    // screen.debug()//for debuging dom
  });

  test("merges custom className with default class", () => {
    render(<Button className="custom-class">Custom Class</Button>);

    // Check if the custom class is added along with the default class
    const button = screen.getByRole("button");
    expect(button).toHaveClass("button"); // default class
    expect(button).toHaveClass("custom-class"); // custom class
  });

  test("forwards other props to the button element", () => {
    render(
      <Button data-testid="button-element" aria-label="click-me">
        Click
      </Button>
    );

    // Check if the button has the correct attributes
    const button = screen.getByTestId("button-element");
    expect(button).toHaveAttribute("aria-label", "click-me");
  });

  test("does not apply the theme class if no theme is passed", () => {
    render(<Button>Default Button</Button>);

    // Check if the button does not have any theme class
    const button = screen.getByRole("button");
    expect(button).not.toHaveClass(ButtonTheme.CLEAR);
  });

  it("calls onClick when the button is clicked", () => {
    // Mock the onToggle function
    const onClick = jest.fn();

    // Render the Button component with the mocked onToggle function
    render(<Button onClick={onClick}>TOGLER</Button>);

    // Find the button element
    const button = screen.getByRole("button");

    // Simulate a click event
    fireEvent.click(button);

    // Assert that the onToggle function was called once when the button is clicked
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
