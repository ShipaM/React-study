import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { LoginModal } from "./LoginModal";
import { componentRender } from "shared/lib/tests/componentRender/ComponentRender";

describe("LoginModal", () => {
  test("renders with correct props", async () => {
    // Mock props
    const props = {
      isOpen: true,
      onClose: jest.fn(),
    };

    // Render the component
    const { getByTestId, getByRole } = componentRender(
      <LoginModal {...props} />,
      {
        initialState: {
          loginForm: { username: "123", password: "123", isLoading: false },
          counter: { value: 10 },
          user: undefined,
        },
      }
    );

    // Assertions
    await waitFor(() => {
      expect(getByTestId("modal")).toHaveClass("opened");
    });
    await waitFor(() => {
      expect(getByRole("button", { name: "LOGIN" })).toBeInTheDocument(); // Assuming "LOGIN" key is in LoginForm
    });
  });

  test("does not render when isOpen is false", async () => {
    const props = {
      isOpen: false,
      onClose: jest.fn(),
    };

    const { queryByTestId } = render(<LoginModal {...props} />);

    await waitFor(() => {
      expect(queryByTestId("modal")).not.toBeInTheDocument();
    });
  });

  test("calls onClose when Modal is closed", async () => {
    const onCloseMock = jest.fn();

    // Render the component
    const { getByTestId } = componentRender(
      <LoginModal isOpen={true} onClose={onCloseMock} />,
      {
        initialState: {
          loginForm: { username: "123", password: "123", isLoading: false },
          counter: { value: 10 },
          user: undefined,
        },
      }
    );
    // Simulate modal close action
    fireEvent.click(getByTestId("overlay"));

    // Assertion

    await waitFor(() => {
      expect(getByTestId("modal")).toHaveClass("opened");
    });
    await waitFor(() => {
      expect(onCloseMock).toHaveBeenCalled();
    });
  });

  test("calls onClose when Escape key is pressed", async () => {
    const onCloseMock = jest.fn();

    const { container } = componentRender(
      <LoginModal isOpen={true} onClose={onCloseMock} />,
      {
        initialState: {
          loginForm: { username: "123", password: "123", isLoading: false },
          counter: { value: 10 },
          user: undefined,
        },
      }
    );

    fireEvent.keyDown(container, { key: "Escape", code: "Escape" });

    await waitFor(() => {
      expect(onCloseMock).toHaveBeenCalled();
    });
  });

  test("renders with error", async () => {
    // Mock props
    const props = {
      isOpen: true,
      onClose: jest.fn(),
    };

    // Render the component
    const { getByText } = componentRender(<LoginModal {...props} />, {
      initialState: {
        loginForm: {
          username: "123",
          password: "123",
          isLoading: false,
          error: "Error",
        },
        counter: { value: 10 },
        user: undefined,
      },
    });
    // Assertions

    await waitFor(() => {
      expect(getByText("Error")).toBeInTheDocument();
    });
  });
});
