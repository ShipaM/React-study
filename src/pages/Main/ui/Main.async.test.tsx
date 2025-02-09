import { render, screen } from "@testing-library/react";
import { MainAsyncPage } from "./Main.async";

describe("MainAsyncPage", () => {
  it("renders the Main page asynchronously", async () => {
    render(<MainAsyncPage />);

    expect(await screen.findByTestId("main")).toBeInTheDocument();
  });
});
