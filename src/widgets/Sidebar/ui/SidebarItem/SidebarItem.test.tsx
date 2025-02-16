import { screen } from "@testing-library/react";
import { SidebarItem } from "./SidebarItem";
import { componentRender } from "shared/lib/tests/componentRender/ComponentRender";

const mockItem = {
  path: "/test-path",
  text: "test-text",
  Icon: () => <svg data-testid="icon" />, // Mocked icon component
};

describe("SidebarItem", () => {
  test("renders SidebarItem correctly", () => {
    componentRender(<SidebarItem item={mockItem} collapsed={false} />, {
      initialState: {
        counter: { value: 10 },
        user: { _isInited: false },
      },
    });

    expect(screen.getByTestId("icon")).toBeInTheDocument();
    expect(screen.getByText("test-text")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/test-path");
    expect(screen.getByRole("link")).toHaveClass("app-link", "item");
  });

  test("applies collapsed class when collapsed is true", () => {
    componentRender(<SidebarItem item={mockItem} collapsed={true} />, {
      initialState: {
        counter: { value: 10 },
        user: { _isInited: false },
      },
    });

    expect(screen.getByRole("link")).toHaveClass("collapsed");
  });

  it("applies additional className if provided", () => {
    const { getByRole } = componentRender(
      <SidebarItem
        item={mockItem}
        collapsed={false}
        className="custom-class"
      />,
      {
        initialState: {
          counter: { value: 10 },
          user: { _isInited: false },
        },
      }
    );

    // Check if the custom class is applied
    const linkElement = getByRole("link");
    expect(linkElement).toHaveClass("custom-class");
  });
});
