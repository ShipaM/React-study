import { screen } from "@testing-library/react";
import { Counter } from "./Counter";
import { componentRender } from "shared/lib/tests/componentRender/ComponentRender";
import React from "react";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  test("test render", () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 10 },
        user: {},
      },
    });

    expect(screen.getByTestId("value-title")).toHaveTextContent("10");
  });

  test("increment", async () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 10 },
        user: {},
      },
    });

    await userEvent.click(screen.getByTestId("increment-btn"));
    expect(screen.getByTestId("value-title")).toHaveTextContent("11");
  });

  test("decrement", async () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 10 },
        user: {},
      },
    });

    await userEvent.click(screen.getByTestId("decrement-btn"));
    expect(screen.getByTestId("value-title")).toHaveTextContent("9");
  });
});
