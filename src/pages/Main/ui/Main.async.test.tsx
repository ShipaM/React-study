import { render } from "@testing-library/react";
import { MainAsyncPage } from "./Main.async";

describe("MainAsyncPage", () => {
  it("renders the Main page asynchronously", async () => {
    const { container } = render(<MainAsyncPage />);

    expect(container).toBeInTheDocument();
  });
});
