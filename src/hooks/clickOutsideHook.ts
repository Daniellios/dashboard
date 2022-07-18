import React, { useEffect, useRef } from "react"

// Close modal with outside click
const useClickOutside = (handler: Function) => {
  let modalRef: any = useRef()

  useEffect(() => {
    let modalHandler = (event: MouseEvent) => {
      if (!modalRef.current.contains(event.target as Node)) handler()
    }
    document.addEventListener("mousedown", modalHandler)

    return () => {
      document.removeEventListener("mousedown", modalHandler)
    }
  }, [])

  return modalRef
}

export default useClickOutside
