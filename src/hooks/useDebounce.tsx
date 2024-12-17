import {useCallback, useRef} from 'react';

export function useDebouncedCallback<T extends (...args: any[]) => any>(
  callback: T,
  delay: number,
  deps?: any,
): T {
  const timeoutRef = useRef<NodeJS.Timeout>();

  const debouncedFn = useCallback(
    (...args: any[]) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => callback(...args), delay);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [callback, delay, deps],
  );

  return debouncedFn as T;
}
