/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, act } from "@testing-library/react";
import { useDebounce } from "./useDebounce";

// Хук для использования внутри компонента
function TestComponent({
  callback,
  delay,
}: {
  callback: (...args: any[]) => void;
  delay: number;
}) {
  const debouncedCallback = useDebounce(callback, delay);

  return <button onClick={() => debouncedCallback("test")}>Click me</button>;
}

describe("useDebounce", () => {
  jest.useFakeTimers();

  it("should call the callback after the specified delay", () => {
    const mockCallback = jest.fn();

    // Рендерим компонент с нужными параметрами
    render(<TestComponent callback={mockCallback} delay={500} />);

    // Имитируем клик
    act(() => {
      document.querySelector("button")?.click();
    });

    // Проверяем, что коллбек не вызван сразу
    expect(mockCallback).not.toHaveBeenCalled();

    // Перематываем таймеры, чтобы проверить, был ли вызван коллбек через заданное время
    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(mockCallback).toHaveBeenCalledWith("test");
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  it("should not call the callback if another click occurs within the delay", () => {
    const mockCallback = jest.fn();

    render(<TestComponent callback={mockCallback} delay={500} />);

    // Первый клик
    act(() => {
      document.querySelector("button")?.click();
    });

    // Второй клик до того, как пройдет задержка
    act(() => {
      document.querySelector("button")?.click();
    });

    // Таймер еще не прошел, коллбек не должен быть вызван
    expect(mockCallback).not.toHaveBeenCalled();

    // Перематываем таймеры, чтобы убедиться, что коллбек вызван только один раз
    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(mockCallback).toHaveBeenCalledWith("test");
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  it("should clear the previous timeout when the function is called again", () => {
    const mockCallback = jest.fn();

    render(<TestComponent callback={mockCallback} delay={500} />);

    // Первый клик
    act(() => {
      document.querySelector("button")?.click();
    });

    // Перематываем таймер, но еще не до конца
    act(() => {
      jest.advanceTimersByTime(200);
    });

    // Второй клик
    act(() => {
      document.querySelector("button")?.click();
    });

    // Перематываем таймер до конца
    act(() => {
      jest.advanceTimersByTime(500);
    });

    // Проверяем, что callback был вызван один раз и с правильным аргументом
    expect(mockCallback).toHaveBeenCalledWith("test");
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});
