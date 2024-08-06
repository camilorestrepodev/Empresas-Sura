import  { createContext, useContext, useState, ReactNode } from "react";

interface IdContextProps {
  id: string | null;
  setId: (id: string) => void;
}

const IdContext = createContext<IdContextProps | undefined>(undefined);

export const IdProvider = ({ children }: { children: ReactNode }) => {
  const [id, setId] = useState<string | null>(null);

  return (
    <IdContext.Provider value={{ id, setId }}>
      {children}
    </IdContext.Provider>
  );
};

export const useId = () => {
  const context = useContext(IdContext);
  if (context === undefined) {
    throw new Error("useId must be used within an IdProvider");
  }
  return context;
};