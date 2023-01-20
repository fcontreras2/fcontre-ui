import { useEffect, useState } from "react";

const useCheckScreen = () => {
  const [size, setSize] = useState(10000);

  useEffect(() => {
    setSize(window.innerWidth);
    const updateResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener("resize", updateResize);

    return () => window.removeEventListener("resize", updateResize);
  }, []);

  return size < 1024;
};


export default useCheckScreen;