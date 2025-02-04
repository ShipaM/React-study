import { fireEvent } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { componentRender } from "shared/lib/tests/componentRender/ComponentRender";
import userEvent from "@testing-library/user-event";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe.skip("LoginForm", () => {
  it("Рендерит форму", () => {
    const { getByText, getByRole } = componentRender(<LoginForm />, {
      initialState: {
        loginForm: {
          username: "",
          password: "",
          isLoading: false,
          error: null,
        },
        counter: { value: 10 },
        user: undefined,
      },
    });

    expect(getByText(/ENTER_USERNAME/i)).toBeInTheDocument();
    expect(getByText(/ENTER_USERPASSWORD/i)).toBeInTheDocument();
    expect(getByRole("button", { name: "LOGIN" })).toBeInTheDocument();
  });

  it("calls dispatch when inputs change valuee", async () => {
    const { findByTestId } = componentRender(<LoginForm />, {
      initialState: {
        loginForm: {
          username: "",
          password: "",
          isLoading: false,
        },
        counter: { value: 10 },
        user: undefined,
      },
    });

    const usernameInput = await findByTestId("user-name");
    const passwordInput = await findByTestId("user-password");

    fireEvent.change(usernameInput, { target: { value: "testUser" } });
    expect(mockDispatch).toHaveBeenCalledWith({
      payload: "testUser",
      type: "login/setUserName",
    });

    fireEvent.change(passwordInput, { target: { value: "password123" } });
    expect(mockDispatch).toHaveBeenCalledWith({
      payload: "password123",
      type: "login/setPassword",
    });
  });

  it("dispatches login action on button click", async () => {
    const { getByRole } = componentRender(<LoginForm />, {
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

    const button = getByRole("button", { name: "LOGIN" });
    await userEvent.click(button);

    expect(mockDispatch).toHaveBeenCalledWith(expect.any(Function));
  });
  it("disables the login button when loading", () => {
    const { getByRole } = componentRender(<LoginForm />, {
      initialState: {
        loginForm: { username: "", password: "", isLoading: true },
        counter: { value: 10 },
        user: undefined,
      },
    });

    expect(getByRole("button", { name: "LOGIN" })).toBeDisabled();
  });

  it("displays an error message if an error exists", () => {
    const { getByText } = componentRender(<LoginForm />, {
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

    expect(getByText("Error")).toBeInTheDocument();
  });
});
