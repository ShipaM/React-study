import { render, screen, fireEvent } from "@testing-library/react";
import { ProfileCard } from "./ProfileCard";
import { Country } from "shared/const/common";
import { Currency } from "entities/Currency/model/types/currency";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe("ProfileCard", () => {
  const defaultProps = {
    data: {
      firstname: "John",
      lastname: "Doe",
      age: 30,
      city: "New York",
      username: "johndoe123",
      avatar: "https://example.com/avatar.jpg",
      currency: Currency.UAH,
      country: Country.Ukraine,
    },
    onChangeFirstname: jest.fn(),
    onChangeLastname: jest.fn(),
    onChangeAge: jest.fn(),
    onChangeUsername: jest.fn(),
    onChangeCity: jest.fn(),
    onChangeAvatar: jest.fn(),
    onChangeCurrency: jest.fn(),
    onChangeCountry: jest.fn(),
    readOnly: false,
  };

  it("renders correctly with data", () => {
    const { getByText } = render(<ProfileCard {...defaultProps} />);

    expect(getByText(/FIRST_NAME >/i)).toBeInTheDocument();
    expect(getByText(/LAST_NAME >/i)).toBeInTheDocument();
    expect(getByText(/AGE >/i)).toBeInTheDocument();
    expect(getByText(/CITY >/i)).toBeInTheDocument();
    expect(getByText(/USERNAME >/i)).toBeInTheDocument();
    expect(getByText(/AVATAR >/i)).toBeInTheDocument();
  });

  it("renders loading state", async () => {
    const { findByTestId } = render(
      <ProfileCard {...defaultProps} isLoading />
    );

    expect(await findByTestId("profile-card-loader")).toBeInTheDocument();
  });

  it("renders error state", () => {
    render(<ProfileCard {...defaultProps} error="Failed to load" />);

    expect(screen.getByText("LOADING_ERROR")).toBeInTheDocument();
    expect(screen.getByText("RELOAD_PAGE")).toBeInTheDocument();
  });

  it("calls onChange handlers", () => {
    const onChangeFirstnameMock = jest.fn();
    const onChangeLastnameMock = jest.fn();

    const { getByTestId } = renderWithTranslation(
      <ProfileCard
        {...defaultProps}
        onChangeFirstname={onChangeFirstnameMock}
        onChangeLastname={onChangeLastnameMock}
      />
    );

    fireEvent.change(getByTestId("input-firstname"), {
      target: { value: "Jane" },
    });

    expect(onChangeFirstnameMock).toHaveBeenCalledWith("Jane");

    fireEvent.change(getByTestId("input-lastname"), {
      target: { value: "Smith" },
    });

    expect(onChangeLastnameMock).toHaveBeenCalledWith("Smith");
  });

  it("renders in read-only mode", () => {
    const { getByTestId } = render(
      <ProfileCard {...defaultProps} readOnly={true} />
    );

    expect(getByTestId("input-firstname")).toHaveClass("readonly");
  });
});
