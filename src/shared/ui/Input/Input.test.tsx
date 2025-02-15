import { render, screen, fireEvent, act } from "@testing-library/react";
import { Input } from "./Input";
import React from "react";

describe("InputComponent", () => {
  const testId = "input";

  test("renders input with placeholder", () => {
    const { getByText } = render(<Input placeholder="Enter text" />);

    expect(getByText(/Enter text >/i)).toBeInTheDocument();
  });

  test("calls onChange when input value changes", () => {
    const handleChange = jest.fn();

    render(<Input onChange={handleChange} />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "Hello" } });

    expect(handleChange).toHaveBeenCalledWith("Hello");
  });

  test("autofocuses when autofocus prop is true", () => {
    render(<Input autofocus />);

    expect(screen.getByRole("textbox")).toHaveFocus();
  });

  test("updates caret position on text input", () => {
    render(<Input data-tesId={testId} />);

    const input = screen.getByTestId("input");

    fireEvent.change(input, { target: { value: "hello" } });

    act(() => {
      fireEvent.select(input, { target: { selectionStart: 3 } });
    });

    // Assuming caret logic is bound to left property
    const caret = document.querySelector(".caret");
    expect(caret).toHaveStyle("left: 27px"); // 3 * 9
  });

  test("handles focus and blur events", () => {
    render(<Input data-tesId={testId} />);

    const input = screen.getByTestId("input");

    act(() => {
      fireEvent.focus(input); // 🔥 This triggers setIsFocused(true);
    });

    expect(document.querySelector(".caret")).toBeInTheDocument();

    act(() => {
      fireEvent.blur(input); // 🔥 This triggers setIsFocused(true);
    });

    expect(document.querySelector(".caret")).not.toBeInTheDocument();
  });
});
