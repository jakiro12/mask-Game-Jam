import React, { createContext, useContext, useState, type SetStateAction } from "react";

import demonPhrases from "../utils/demon-phrases.json";


type ColorContextType = {
  activeColor: string;
  setActiveColor: (color: string) => void;
  message:string,
  setMessage:React.Dispatch<SetStateAction<string>>;
  targetHash:string
  setShowProverb:React.Dispatch<SetStateAction<boolean>>
  showProverb:boolean
  resetGame:()=>void
  gameId:number
  setGameId:React.Dispatch<SetStateAction<number>>
  setViewPhrase:React.Dispatch<SetStateAction<boolean>>
  viewPhrase:boolean
};
function getRandomTargetHash(): string {
  const keys = Object.keys(demonPhrases);
  const randomIndex = Math.floor(Math.random() * keys.length);
  return keys[randomIndex];
}
const ColorContext = createContext<ColorContextType | undefined>(undefined);

export function ColorProvider({ children }: { children: React.ReactNode }) {
  const [activeColor, setActiveColor] = useState<string>("#ffffff");  
  const [message,setMessage]=useState<string>("")
  const [showProverb, setShowProverb] = useState<boolean>(false)
 const [targetHash, setTargetHash] = useState(() => getRandomTargetHash());
 const [gameId, setGameId] = useState(0);
    const [viewPhrase,setViewPhrase]=useState<boolean>(false)

  const resetGame=()=>{
    setMessage("")
    setActiveColor("#ffffff")
    setTargetHash(getRandomTargetHash())
    setGameId(prev => prev + 1)
    setViewPhrase(false)
  }
  return (
    <ColorContext.Provider value={{ activeColor, setActiveColor,message,setMessage,targetHash,showProverb, setShowProverb,resetGame,gameId, setGameId,viewPhrase,setViewPhrase }}>
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
