import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import AddCommentForm from "./AddCommentForm";
import { componentRender } from "shared/lib/tests/componentRender/ComponentRender";

describe("AddCommentForm", () => {
  const onSendCommentMock = jest.fn();

  it("renders the input and button", () => {
   componentRender(<AddCommentForm onSendComment={onSendCommentMock} />);
   
    expect(screen.getByTestId("add-comment-form-input")).toBeInTheDocument();
    expect(screen.getByText(/send/i)).toBeInTheDocument();
  });

  it("calls onSendComment with the correct input value", () => {
    componentRender(<AddCommentForm onSendComment={onSendCommentMock} />);

    const input = screen.getByTestId("add-comment-form-input");
    const button = screen.getByText("SEND");

    // Simulate user input
    fireEvent.change(input, { target: { value: "Test comment" } });
    expect(input).toHaveValue("Test comment");

    // Simulate button click
    fireEvent.click(button);

    // Ensure onSendComment is called with the correct value
    expect(onSendCommentMock).toHaveBeenCalledWith("Test comment");

    // Check that the input is cleared after sending the comment
    expect(input).toHaveValue("");
  });
});
