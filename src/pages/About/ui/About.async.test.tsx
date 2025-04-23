import { render } from "@testing-library/react";
import { AboutAsyncPage } from "./About.async";

describe("AboutAsyncPage", () => {
  it("renders the About page asynchronously", async () => {
    const { container } = render(<AboutAsyncPage />);

    expect(container).toBeInTheDocument();
  });
});
