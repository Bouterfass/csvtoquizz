import React from "react";
import { speak } from "../utils/speaker";
import { SoundIcon, SoundMuted } from "./icons/icons";

interface ListenButtonProps {
  text: string
  lang?: string // Langue (optionnelle), par défaut "ja-JP"
  disabled?: boolean
}

const ListenButton: React.FC<ListenButtonProps> = ({ text, lang = "ja-JP", disabled = false}) => {
  return (
    <button
      onClick={() => speak(text, lang)}
      disabled={disabled}
    >
      {disabled ? <SoundMuted /> : <SoundIcon />}
    </button>
  );
};

export default ListenButton;
