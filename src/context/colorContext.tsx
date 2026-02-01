import React, { createContext, useContext, useState, type SetStateAction } from "react";

type ColorContextType = {
  activeColor: string;
  setActiveColor: (color: string) => void;
  message:string,
  setMessage:React.Dispatch<SetStateAction<string>>;
};

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export function ColorProvider({ children }: { children: React.ReactNode }) {
  const [activeColor, setActiveColor] = useState<string>("#ffffff");  
  const [message,setMessage]=useState<string>("")
  return (
    <ColorContext.Provider value={{ activeColor, setActiveColor,message,setMessage }}>
      {children}
    </ColorContext.Provider>
  );
}

export function useColor() {
  const context = useContext(ColorContext);

  if (!context) {
    throw new Error("useColor must be used within a ColorProvider");
  }

  return context;
}
