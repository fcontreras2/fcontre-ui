import { useEffect } from "react";

const useDisabledScroll = (condition:boolean, selector?: string) => {
  
  useEffect(() => {
    const element = document?.querySelector(selector || "body");
    element?.setAttribute('className', condition ? "overflow-y-hide" : "overflow-y-auto")
  },[condition])

}

export default useDisabledScroll;