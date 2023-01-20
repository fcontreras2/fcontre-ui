import { useCallback, useState } from "react"

/**
 * Permite verificar si un valor ha cambiado de valor entre "true" y "false"
 */
const useToggle = ( initialState:boolean = false)  => {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => {
    setState(!state)
  },[])

  return [state,toggle]
}

export default useToggle;