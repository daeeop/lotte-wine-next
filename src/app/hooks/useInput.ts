import { ChangeEventHandler, useState, useCallback } from 'react';
import { useDebounce } from 'react-use';

export default function useInput<T extends Record<string, any>>(
  initialValue: T
) {
  const [data, set] = useState(initialValue);
  const [debouncedData, setDebouncedData] = useState(initialValue);

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      const { name, value } = event.target;
      console.log(name, value);
      set((prevData) => ({ ...prevData, [name]: value }));
    },
    []
  );

  useDebounce(
    () => {
      setDebouncedData(data);
    },
    500, // 디바운스 지연 시간 (밀리초)
    [data]
  );

  const reset = useCallback(() => {
    set(initialValue);
  }, [initialValue]);

  return { data: debouncedData, handleChange, reset };
}
