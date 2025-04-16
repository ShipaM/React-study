import React from "react";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Card component", () => {
  it("renders children", () => {
    const children = <div>Hello World!</div>;

    render(<Card>{children}</Card>);

    expect(screen.getByText("Hello World!")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const className = "custom-class";

    render(
      <Card className={className} data-testid="card">
        123
      </Card>
    );

    expect(screen.getByTestId("card")).toHaveClass(className);
  });

  it("applies default className", () => {
    render(
      <Card data-testid="card">
        <>123</>
      </Card>
    );

    expect(screen.getByTestId("card")).toHaveClass("card");
  });

  it("passes through HTML attributes", () => {
    const id = "my-card";

    const { getByTestId } = render(
      <Card id={id} data-testid="card">
        123
      </Card>
    );

    expect(getByTestId("card")).toHaveAttribute("id", id);
  });
});
