/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useRef } from "react";

// Типизация для таймера
type Timer = ReturnType<typeof setTimeout>;

export function useDebounce<T extends (...args: any[]) => void>(
  callback: T,
  delay: number
) {
  const timer = useRef<Timer | null>(null);

  // Используем useCallback для предотвращения повторной инициализации функции при рендерах
  const debouncedCallback = useCallback(
    (...args: Parameters<T>) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay] // зависимости
  );

  return debouncedCallback;
}
