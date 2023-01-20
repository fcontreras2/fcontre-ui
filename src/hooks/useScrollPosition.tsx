import { useEffect, useState } from "react";

/**
 * Hook que verifica si el scroll window ha pasado la posición en la pantalla en vertical
 * 
 * @param position 
 * @returns 
 */
const useScrollPosition = (position: number = 0) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePosition);
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);
  return scrollPosition > position;
};

export default useScrollPosition;
