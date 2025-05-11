import { screen, fireEvent, render } from "@testing-library/react";
import { useSelector } from "react-redux";
import { ArticleDetailsPageHeader } from "./ArticleDetailsPageHeader";
import { useNavigate } from "react-router-dom";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("ArticleDetailsPageHeader", () => {
  const navigate = jest.fn();
  (useSelector as unknown as jest.Mock).mockImplementation((selector) =>
    selector()
  );

  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(navigate);
  });

  it("renders ArticleDetailsPageHeader", async () => {
    const { container } = render(<ArticleDetailsPageHeader />);

    expect(container).toBeInTheDocument();
  });

  it("renders correctly and shows back button", () => {
    render(<ArticleDetailsPageHeader />);

    expect(screen.getByText("BACK_TO_LIST")).toBeInTheDocument();
  });

  it("navigates to the article list when the back button is clicked", () => {
    render(<ArticleDetailsPageHeader />);

    fireEvent.click(screen.getByText("BACK_TO_LIST"));

    expect(navigate).toHaveBeenCalledWith("/articles");
  });

  it("shows the edit button if canEdit is true", () => {
    // Mock canEdit to return true and article details
    (useSelector as unknown as jest.Mock)
      .mockReturnValueOnce(true)
      .mockReturnValueOnce({ id: "1" });

    render(<ArticleDetailsPageHeader />);

    // Check if the edit button is rendered
    expect(screen.getByText("EDIT")).toBeInTheDocument();
  });

  it("does not show the edit button if canEdit is false", () => {
    // Mock canEdit to return false
    (useSelector as unknown as jest.Mock).mockReturnValueOnce(false);

    render(<ArticleDetailsPageHeader />);

    // Ensure the edit button is not present
    expect(screen.queryByText("EDIT")).not.toBeInTheDocument();
  });

  it("navigates to the edit article page when the edit button is clicked", () => {
    // Mock canEdit to return true and article details
    (useSelector as unknown as jest.Mock)
      .mockReturnValueOnce(true)
      .mockReturnValueOnce({ id: "1" });

    render(<ArticleDetailsPageHeader />);

    fireEvent.click(screen.getByText("EDIT"));

    expect(navigate).toHaveBeenCalledWith("/articles/1/edit");
  });
});
