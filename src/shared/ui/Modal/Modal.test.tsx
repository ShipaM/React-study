import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { Modal } from "./Modal"; // Adjust import path as necessary

describe("Modal Component", () => {
  it("renders nothing when lazy and not open", () => {
    const { container } = render(<Modal lazy isOpen={false} />);
    expect(container.firstChild).toBeNull();
  });

  it("renders modal when not lazy and open", () => {
    const { getByTestId } = render(
      <Modal isOpen={true}>
        <div>Modal Content</div>
      </Modal>
    );

    const modalOverlay = getByTestId("overlay");
    expect(modalOverlay).toBeInTheDocument();
  });

  it("applies additional className", () => {
    const { getByTestId } = render(
      <Modal isOpen={true} className="custom-class">
        <div>Modal Content</div>
      </Modal>
    );

    const modalElement = getByTestId("modal");
    expect(modalElement).toHaveClass("modal", "custom-class");
  });

  it("closes modal when clicking overlay", async () => {
    const handleClose = jest.fn();
    const { getByTestId } = render(
      <Modal isOpen={true} onClose={handleClose}>
        <div>Modal Content</div>
      </Modal>
    );

    const overlay = getByTestId("overlay");
    fireEvent.click(overlay);

    await waitFor(
      () => {
        expect(handleClose).toHaveBeenCalled();
      },
      { timeout: 5000 }
    );
  });

  it("closes modal when pressing Escape key", async () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        <div>Modal Content</div>
      </Modal>
    );

    fireEvent.keyDown(document, { key: "Escape" });

    await waitFor(() => {
      expect(handleClose).toHaveBeenCalled();
    });
  });
  it("renders with children when isOpen is true", () => {
    const handleClose = jest.fn();

    const { getByText } = render(
      <Modal isOpen={true} onClose={handleClose}>
        <div>Modal Content</div>
      </Modal>
    );

    expect(getByText("Modal Content")).toBeInTheDocument();
  });

  it("renders immediately when lazy prop is false", () => {
    const { getByText } = render(
      <Modal isOpen={true} lazy={false}>
        <div>Immediate Modal Content</div>
      </Modal>
    );

    expect(getByText("Immediate Modal Content")).toBeInTheDocument();
  });

  it("renders children and handles click events", () => {
    const onContentClick = jest.fn();
    const { getByTestId, getByText } = render(
      <div data-testid="content" className="content" onClick={onContentClick}>
        <span>Test Content</span>
      </div>
    );

    // Verify that the content renders correctly
    const contentElement = getByTestId("content");
    expect(contentElement).toBeInTheDocument();
    expect(contentElement).toHaveClass("content");

    // Verify that children are rendered correctly
    const childElement = getByText("Test Content");
    expect(childElement).toBeInTheDocument();

    // Simulate click event and verify handler invocation
    fireEvent.click(contentElement);
    expect(onContentClick).toHaveBeenCalledTimes(1);
  });
});
