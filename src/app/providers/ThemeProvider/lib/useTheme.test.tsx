import { renderHook, act } from "@testing-library/react";
import { ThemeContext, Theme, LOCAL_STORAGE_THEME_KEY } from "./ThemeContext";
import { useTheme } from "./useTheme";

const mockSetTheme = jest.fn();

describe("useTheme hook", () => {
  afterEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  test("should return the current theme", () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => (
        <ThemeContext.Provider
          value={{ theme: Theme.DARK, setTheme: mockSetTheme }}
        >
          {children}
        </ThemeContext.Provider>
      ),
    });

    expect(result.current.theme).toBe(Theme.DARK);
  });

  test("should toggle theme from DARK to LIGHT", () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => (
        <ThemeContext.Provider
          value={{ theme: Theme.DARK, setTheme: mockSetTheme }}
        >
          {children}
        </ThemeContext.Provider>
      ),
    });

    act(() => {
      result.current.toggleTheme();
    });

    expect(mockSetTheme).toHaveBeenCalledWith(Theme.LIGHT);
  });

  test("should toggle theme from LIGHT to DARK", () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => (
        <ThemeContext.Provider
          value={{ theme: Theme.LIGHT, setTheme: mockSetTheme }}
        >
          {children}
        </ThemeContext.Provider>
      ),
    });

    act(() => {
      result.current.toggleTheme();
    });

    expect(mockSetTheme).toHaveBeenCalledWith(Theme.ORANGE);
  });

  test("should toggle theme from DARK to LIGHT", () => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, Theme.ORANGE);

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeContext.Provider
        value={{ theme: Theme.DARK, setTheme: mockSetTheme }}
      >
        {children}
      </ThemeContext.Provider>
    );

    const { result } = renderHook(() => useTheme(), { wrapper });

    act(() => {
      result.current.toggleTheme();
    });

    expect(mockSetTheme).toHaveBeenCalledWith(Theme.LIGHT);
    expect(localStorage.getItem(LOCAL_STORAGE_THEME_KEY)).toEqual(Theme.LIGHT);
  });

  test("should toggle theme from LIGHT to DARK", () => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, Theme.LIGHT);

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeContext.Provider
        value={{ theme: Theme.LIGHT, setTheme: mockSetTheme }}
      >
        {children}
      </ThemeContext.Provider>
    );

    const { result } = renderHook(() => useTheme(), { wrapper });

    act(() => {
      result.current.toggleTheme();
    });

    expect(mockSetTheme).toHaveBeenCalledWith(Theme.ORANGE);
    expect(localStorage.getItem(LOCAL_STORAGE_THEME_KEY)).toEqual(Theme.ORANGE);
  });
});
