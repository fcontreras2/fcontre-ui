import { useEffect } from "react";
import useIsSsr from "../useIsSsr";

const useDisabledScroll = (condition: boolean, selector?: string) => {
  const isSsr = useIsSsr();

  useEffect(() => {
    if (!isSsr) {
      const element = document?.querySelector(selector || "body");
      element?.setAttribute(
        "className",
        condition ? "overflow-y-hide" : "overflow-y-auto"
      );
    }
  }, [condition, isSsr]);
};

export default useDisabledScroll;
