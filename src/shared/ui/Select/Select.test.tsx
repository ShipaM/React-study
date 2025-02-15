import { render, screen, fireEvent } from "@testing-library/react";
import { Select } from "./Select";

const mockOnChange = jest.fn();

describe("Select Component", () => {
    const testId = "select";

  it("renders the select with options and label", () => {
    const options = [
      { value: "option1", content: "Option 1" },
      { value: "option2", content: "Option 2" },
    ];

    render(
      <Select label="Choose an option" options={options} value="option1" />
    );

    // Check if the label is rendered
    expect(screen.getByText("Choose an option")).toBeInTheDocument();

    // Check if the select element is rendered with options
    const selectElement = screen.getByRole("combobox");

    expect(selectElement).toBeInTheDocument();
    expect(selectElement).toHaveValue("option1");
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
  });

  // Test 2: It triggers the onChange callback when selecting a new value
  it("calls the onChange function when a new option is selected", async () => {
    const options = [
      { value: "option1", content: "Option 1" },
      { value: "option2", content: "Option 2" },
    ];

    render(
      <Select
        label="Choose an option"
        options={options}
        value="option1"
        onChange={mockOnChange}
        data-tesId={testId}
      />
    );

    // Fire the change event to simulate selecting a new option
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "option2" },
    });

    // Assert that the mock function is called with the correct value
    expect(mockOnChange).toHaveBeenCalledWith("option2");
    expect(await screen.findByTestId("select")).not.toBeDisabled();
  });

  // Test 3: It does not allow selection change when readOnly is true
  it("does not call onChange when readOnly is true", async () => {
    const options = [
      { value: "option1", content: "Option 1" },
      { value: "option2", content: "Option 2" },
    ];

    render(
      <Select
        label="Choose an option"
        options={options}
        value="option1"
        onChange={mockOnChange}
        readOnly={true}
        data-tesId={testId}
      />
    );

    // Assert that the mock function was not called
    expect(await screen.findByTestId("select")).toBeDisabled();
    expect(mockOnChange).not.toHaveBeenCalled();
  });

  // Test 4: It handles empty options list
  it("renders an empty select when no options are provided", () => {
    render(<Select label="Choose an option" options={[]} value="" />);

    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();
  });
});
