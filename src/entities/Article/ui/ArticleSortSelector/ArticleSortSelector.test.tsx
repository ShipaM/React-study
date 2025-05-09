import { screen, fireEvent } from "@testing-library/react";
import { ArticleSortSelector } from "./ArticleSortSelector";
import { ArticleSortField } from "entities/Article";
import { componentRender } from "shared/lib/tests/componentRender/ComponentRender";

describe("ArticleSortSelector", () => {
  const mockOnChangeSort = jest.fn();
  const mockOnChangeOrder = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    componentRender(
      <ArticleSortSelector
        sort={"views"}
        order={"asc"}
        onChangeOrder={mockOnChangeOrder}
        onChangeSort={mockOnChangeSort}
      />,
      {
        initialState: {
          counter: { value: 0 },
          user: { _isInited: false },
          scrollSave: {
            scroll: {},
          },
        },
      }
    );

    // Check if both Select components are rendered
    expect(screen.getByText("SORT_BY")).toBeInTheDocument();
    expect(screen.getByText("BY")).toBeInTheDocument();
  });

  it("displays the correct initial sort and order values", () => {
    componentRender(
      <ArticleSortSelector
        sort={"views"}
        order={"asc"}
        onChangeOrder={mockOnChangeOrder}
        onChangeSort={mockOnChangeSort}
      />,
      {
        initialState: {
          counter: { value: 0 },
          user: { _isInited: false },
          scrollSave: {
            scroll: {},
          },
        },
      }
    );

    // Ensure the selected options are correctly rendered
    expect(screen.getByText("DATE")).toBeInTheDocument(); // default ArticleSortField.CREATED
    expect(screen.getByText("ASC")).toBeInTheDocument(); // default SortOrder.ASC
  });

  it("calls onChangeSort when a new sort field is selected", () => {
    componentRender(
      <ArticleSortSelector
        sort={"views"}
        order={"asc"}
        onChangeOrder={mockOnChangeOrder}
        onChangeSort={mockOnChangeSort}
      />,
      {
        initialState: {
          counter: { value: 0 },
          user: { _isInited: false },
          scrollSave: {
            scroll: {},
          },
        },
      }
    );

    const sortFieldLabel = screen.getByText("SORT_BY");
    const selectElement =
      sortFieldLabel?.nextElementSibling as HTMLSelectElement | null;

    if (selectElement) {
      fireEvent.change(selectElement, {
        target: { value: ArticleSortField.TITLE },
      });
    }
    expect(mockOnChangeSort).toHaveBeenCalledWith(ArticleSortField.TITLE);
  });

  it("calls onChangeOrder when a new order is selected", () => {
    componentRender(
      <ArticleSortSelector
        sort={"views"}
        order={"asc"}
        onChangeOrder={mockOnChangeOrder}
        onChangeSort={mockOnChangeSort}
      />,
      {
        initialState: {
          counter: { value: 0 },
          user: { _isInited: false },
          scrollSave: {
            scroll: {},
          },
        },
      }
    );
    const sortFieldLabel = screen.getByText("BY");
    const selectElement =
      sortFieldLabel?.nextElementSibling as HTMLSelectElement | null;

    if (selectElement) {
      fireEvent.change(selectElement, {
        target: { value: "desc" },
      });
    }

    expect(mockOnChangeOrder).toHaveBeenCalledWith("desc");
  });

  it("applies custom className if provided", () => {
    const customClassName = "custom-class";
    componentRender(
      <ArticleSortSelector
        sort={"views"}
        order={"asc"}
        onChangeOrder={mockOnChangeOrder}
        onChangeSort={mockOnChangeSort}
        className={customClassName}
      />,
      {
        initialState: {
          counter: { value: 0 },
          user: { _isInited: false },
          scrollSave: {
            scroll: {},
          },
        },
      }
    );

    expect(screen.getByTestId("article-sort-selector")).toHaveClass(
      customClassName
    );
  });

  it("renders the correct options for sort fields and order", () => {
    componentRender(
      <ArticleSortSelector
        sort={"views"}
        order={"asc"}
        onChangeOrder={mockOnChangeOrder}
        onChangeSort={mockOnChangeSort}
      />,
      {
        initialState: {
          counter: { value: 0 },
          user: { _isInited: false },
          scrollSave: {
            scroll: {},
          },
        },
      }
    );

    // Check for all sort field options
    expect(screen.getByText("DATE")).toBeInTheDocument();
    expect(screen.getByText("TITLE")).toBeInTheDocument();
    expect(screen.getByText("VIEWS")).toBeInTheDocument();

    // Check for all order options
    expect(screen.getByText("ASC")).toBeInTheDocument();
    expect(screen.getByText("DESC")).toBeInTheDocument();
  });
});
