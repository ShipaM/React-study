import { render } from "@testing-library/react";
import { useInitialEffect } from "./useInitialEffect"; // Adjust the path accordingly

describe("useInitialEffect", () => {
  it("should call the callback when the project is not 'storybook'", () => {
    const callback = jest.fn();

    // Render a component that uses the hook
    const TestComponent = () => {
      useInitialEffect(callback);
      return null; // The component does not need to render anything
    };

    render(<TestComponent />);

    // Since the callback is inside useEffect, we have to wait for it to be called
    expect(callback).toHaveBeenCalledTimes(1); // Ensure the callback was called once
  });
});
