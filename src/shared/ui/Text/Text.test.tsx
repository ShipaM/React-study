import { render } from "@testing-library/react";
import { Text } from "./Text";
import { TextTheme } from "./textConstants";

describe("Text Component", () => {
  it("renders with title and text", () => {
    const { getByText } = render(<Text title="Test Title" text="Test Text" />);
    
    expect(getByText("Test Title")).toBeInTheDocument();
    expect(getByText("Test Text")).toBeInTheDocument();
  });

  it("renders only title", () => {
    const { getByText, queryByText } = render(<Text title="Only Title" />);
    
    expect(getByText("Only Title")).toBeInTheDocument();
    expect(queryByText("Test Text")).not.toBeInTheDocument();
  });

  it("renders only text", () => {
    const { getByText, queryByText } = render(<Text text="Only Text" />);
    
    expect(getByText("Only Text")).toBeInTheDocument();
    expect(queryByText("Only Title")).not.toBeInTheDocument();
  });

  it("applies the correct theme class", () => {
    const { getByText } = render(
      <Text title="Styled Title" theme={TextTheme.ERROR} />
    );
    
    const textElement = getByText("Styled Title");
    expect(textElement.parentElement).toHaveClass(TextTheme.ERROR);
  });
});