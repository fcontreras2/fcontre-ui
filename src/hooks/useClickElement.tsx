import { useEffect, useCallback, useRef } from 'react';

export const useClickElement = (handler: () => void): React.RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLElement>();
  /**
   * Evento verifica si se ha dado click dentro del elemento html
   */
  const handleEventClick = useCallback((e: MouseEvent) => {
    if (e.target && !ref?.current?.contains(e.target as HTMLElement)) {
      handler();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleEventClick, true);

    return () => {
      document.removeEventListener('click', handleEventClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, handler]);

  return ref as React.RefObject<HTMLDivElement>;
};

export default useClickElement;
