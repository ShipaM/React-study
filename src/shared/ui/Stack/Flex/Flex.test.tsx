import { render, screen } from "@testing-library/react";
import { Flex } from "./Flex";

describe("Flex", () => {
  it("renders children correctly", () => {
    render(
      <Flex direction="row">
        <div>Test child</div>
      </Flex>
    );

    expect(screen.getByText("Test child")).toBeInTheDocument();
  });

  it("applies direction class", () => {
    render(
      <Flex direction="column">
        <div>Direction test</div>
      </Flex>
    );

    const container = screen.getByText("Direction test").parentElement;
    expect(container?.className).toContain("flex");
    expect(container?.className).toContain(
      "flex justify-start align-center direction-column"
    );
  });

  it("applies justify, align, and gap classes", () => {
    render(
      <Flex direction="row" justify="center" align="end" gap="16">
        <div>Style test</div>
      </Flex>
    );

    const container = screen.getByText("Style test").parentElement;

    expect(container?.className).toContain("justify-center");
    expect(container?.className).toContain("align-end");
    expect(container?.className).toContain("gap-16");
  });

  it("applies max class when max is true", () => {
    render(
      <Flex direction="row" max>
        <div>Max test</div>
      </Flex>
    );

    const container = screen.getByText("Max test").parentElement;

    expect(container?.className).toContain("max");
  });

  it("applies custom className", () => {
    render(
      <Flex direction="row" className="custom-class">
        <div>Class test</div>
      </Flex>
    );

    const container = screen.getByText("Class test").parentElement;

    expect(container?.className).toContain("custom-class");
  });
});
