import React, { createContext, useContext, useState } from "react";

type ColorContextType = {
  activeColor: string;
  setActiveColor: (color: string) => void;
};

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export function ColorProvider({ children }: { children: React.ReactNode }) {
  const [activeColor, setActiveColor] = useState<string>("#ff0000");

  return (
    <ColorContext.Provider value={{ activeColor, setActiveColor }}>
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
