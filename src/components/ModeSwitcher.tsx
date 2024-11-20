import React from "react";
import { useMode } from "../context/ModeContext";

const ModeSwitcher = () => {
  const { mode, setMode } = useMode();

  return (
    <div className="flex space-x-4">
      {["kana", "romaji", "kanji"].map((option) => {

        const getSymbol = (option: string): string => {
          if (option === "kana")
            return "かな"
          if (option === "kanji")
            return "漢字"
          return "A"
        }

        return (
          <label
            key={option}
            className={`text-sm cursor-pointer p-2 border-[1px] border-solid border-lightPurple rounded-full ${mode === option ? "bg-lightPurple text-white" : "bg-lightGrayL text-blackL"
              }`}
          >
            <input
              type="radio"
              name="mode"
              value={option}
              checked={mode === option}
              onChange={() => setMode(option as "kana" | "romaji" | "kanji")}
              className="hidden"
            />
            {getSymbol(option)} {/* Capitalise */}
          </label>

        )
      })}
    </div>
  );
};

export default ModeSwitcher;
