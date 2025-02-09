import { render, screen } from "@testing-library/react";
import { AboutAsyncPage } from "./About.async";

describe("AboutAsyncPage", () => {
  it("renders the About page asynchronously", async () => {
    render(<AboutAsyncPage />);

    expect(await screen.findByTestId("about")).toBeInTheDocument();
  });
});
