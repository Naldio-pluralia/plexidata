import { createContext, ReactNode, useContext, useState } from "react";


interface ModalProviderProps {
  children: ReactNode;
}


interface ModalContextData {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void
}
const ModalContext = createContext({} as ModalContextData)

export function ModalProvider({ children }: ModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <ModalContext.Provider value={{setIsOpen, isOpen}}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)

  return context;
}