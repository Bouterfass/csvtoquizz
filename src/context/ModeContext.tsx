import React, { createContext, ReactNode, useContext, useState } from "react";

interface ModeContextType {
  mode: "kanji" | "kana" | "romaji";
  setMode: (newMode: "kanji" | "kana" | "romaji") => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export const ModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<"kanji" | "kana" | "romaji">(localStorage.mode || "kana");

  const updateMode = (newMode: "kanji" | "kana" | "romaji") => {
    setMode(newMode);
    localStorage.setItem("mode", newMode); // Optionnel : Enregistre dans le localStorage
  };

  return (
    <ModeContext.Provider value={{ mode, setMode: updateMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error("useMode must be used within a ModeProvider");
  }
  return context;
};
