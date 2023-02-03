import { useEffect } from "react";
import useIsSsr from "./useIsSsr";

const useDisabledScroll = (condition:boolean, selector?: string):void => {
  
  const isSsr = useIsSsr();
  useEffect(() => {

    const element = document?.querySelector(selector || "body");
    element?.setAttribute('className', condition ? "overflow-y-hide" : "overflow-y-auto")
  },[condition])

}

export default useDisabledScroll;