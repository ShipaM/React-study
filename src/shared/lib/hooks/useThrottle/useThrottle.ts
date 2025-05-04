/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useRef } from "react";

//Позволяет сохранять одно событие в промежуток времени и не вызывать его повторно
export function useThrottle(callback: (...args: any[]) => void, delay: number) {
  const throttleRef = useRef(false);

  return useCallback(
    (...args: any[]) => {
      if (!throttleRef.current) {
        callback(...args);
        throttleRef.current = true;

        setTimeout(() => {
          throttleRef.current = false;
        }, delay);
      }
    },
    [callback, delay]
  );
}
