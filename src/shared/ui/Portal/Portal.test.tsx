import React from "react";
import { render, screen } from "@testing-library/react";
import { Portal } from "./Portal";

describe("Portal component", () => {
  let portalRoot: HTMLElement;

  beforeEach(() => {
    portalRoot = document.createElement("div");
    portalRoot.id = "portal-root";
    document.body.appendChild(portalRoot);
  });

  afterEach(() => {
    document.body.removeChild(portalRoot);
  });

  it("renders children into a portal", () => {
    render(
      <Portal element={portalRoot}>
        <div>Test Content</div>
      </Portal>
    );

    // Ensure that the content is rendered inside the portalRoot
    expect(portalRoot.children.length).toBe(1);
    expect(portalRoot.children[0].textContent).toBe("Test Content");

    // Alternatively, you can use screen queries from React Testing Library
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });
  it("renders children into the provided element", () => {
    const customElement = document.createElement("div");
    document.body.appendChild(customElement); // Append a new custom element to the body

    render(
      <Portal element={customElement}>
        <div>Test Content</div>
      </Portal>
    );

    // Verify the content is rendered in the custom element
    expect(customElement.querySelector("div")).toHaveTextContent(
      "Test Content"
    );
  });

  it("does not render children in the default location when a custom element is passed", () => {
    const customElement = document.createElement("div");
    document.body.appendChild(customElement);

    render(
      <Portal element={customElement}>
        <div>Test Content</div>
      </Portal>
    );

    // Ensure that the content isn't rendered directly in the body
    expect(document.body.querySelector("div")).not.toHaveTextContent(
      "Test Content"
    );
  });
});
