import { render, screen, fireEvent } from "@testing-library/react";
import { CountrySelect } from "./CountrySelect";
import { Country } from "../model/types/country";

describe("CountrySelect", () => {
  test("renders CountrySelect component", () => {
    render(<CountrySelect />);
    expect(screen.getByText("COUNTRY")).toBeInTheDocument();
  });

  test("displays selected country", () => {
    render(<CountrySelect value={Country.Ukraine} />);
    expect(screen.getByDisplayValue(Country.Ukraine)).toBeInTheDocument();
  });

  test("calls onChange when a new country is selected", () => {
    const onChangeMock = jest.fn();
    render(<CountrySelect onChange={onChangeMock} />);

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: Country.Armenia } });

    expect(onChangeMock).toHaveBeenCalledWith(Country.Armenia);
  });

  test("does not allow selection when readOnly is true", () => {
    const onChangeMock = jest.fn();
    render(
      <CountrySelect
        value={Country.Ukraine}
        onChange={onChangeMock}
        readOnly={true}
      />
    );

    const select = screen.getByRole("combobox");
    expect(select).toBeDisabled();
  });
});
