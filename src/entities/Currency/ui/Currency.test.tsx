import { render, screen, fireEvent } from "@testing-library/react";
import { CurrencySelect } from "./CurrencySelect";
import { Currency } from "../model/types/currency";

describe("CurrencySelect", () => {
  test("renders CurrencySelect component", () => {
    render(<CurrencySelect />);
    expect(screen.getByText("CURRENCY")).toBeInTheDocument();
  });

  test("displays selected currency", () => {
    render(<CurrencySelect value={Currency.EUR} />);
    expect(screen.getByDisplayValue(Currency.EUR)).toBeInTheDocument();
  });

  test("calls onChange when a new currency is selected", () => {
    const onChangeMock = jest.fn();
    render(<CurrencySelect onChange={onChangeMock} />);

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: Currency.USD } });

    expect(onChangeMock).toHaveBeenCalledWith(Currency.USD);
  });

  test("does not allow selection when readOnly is true", () => {
    const onChangeMock = jest.fn();
    render(
      <CurrencySelect
        value={Currency.UAH}
        onChange={onChangeMock}
        readOnly={true}
      />
    );

    const select = screen.getByRole("combobox");
    expect(select).toBeDisabled();
  });
});
