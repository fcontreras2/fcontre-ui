import { useEffect, useState } from "react";
import useIsSsr from '../useIsSsr';
/**
 * Evento que permite identificar cuando un elemento ha cambiado luego de un delay de espera
 */
function useDebounce<T>(value: T, delay: number) {
  const [debounceValue, setDebounceValue] = useState<T>();
  const IsSrr = useIsSsr();
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounceValue;
};

export default useDebounce;
