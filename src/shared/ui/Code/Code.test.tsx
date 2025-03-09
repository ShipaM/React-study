// Code.test.tsx
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Code } from "./Code"; // Adjust import path as per your project structure

describe("Code component", () => {
  test("renders code text and copy button", () => {
    const text = 'const greeting = "Hello World!";';
    render(<Code text={text} />);

    const codeElement = screen.getByText(text);
    expect(codeElement).toBeInTheDocument();

    const copyButton = screen.getByRole("button");
    expect(copyButton).toBeInTheDocument();
  });

  test("copies text to clipboard on button click", async () => {
    const text = 'const greeting = "Hello World!";';
    render(<Code text={text} />);

    // Mock the clipboard API
    const clipboardWriteTextMock = jest.fn();
    Object.assign(navigator, {
      clipboard: {
        writeText: clipboardWriteTextMock,
      },
    });

    const copyButton = screen.getByRole("button");
    fireEvent.click(copyButton);

    // Ensure text is copied to clipboard
    expect(clipboardWriteTextMock).toHaveBeenCalledWith(text);
  });
});
