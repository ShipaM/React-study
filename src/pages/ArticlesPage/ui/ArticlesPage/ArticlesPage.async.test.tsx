import { render, screen, waitFor } from "@testing-library/react";
import { Suspense } from "react";
import { ArticlesAsyncPage } from "./ArticlesPage.async";

describe("ArticlesAsyncPage", () => {
  it("should render the fallback and then load the component", async () => {
    const fallbackText = "Loading...";

    render(
      <Suspense fallback={<div>{fallbackText}</div>}>
        <ArticlesAsyncPage />
      </Suspense>
    );

    // Check if fallback is displayed initially
    expect(screen.getByText(fallbackText)).toBeInTheDocument();

    // Wait for the component to load
    await waitFor(() => {
      expect(screen.queryByText(fallbackText)).not.toBeInTheDocument();
    });
  });
});
