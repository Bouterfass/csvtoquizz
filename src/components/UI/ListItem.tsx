import React from "react";
import { CorrectIcon, WrongIcon } from "../icons/icons";


interface AnswerTypes {
  kana: string
  kanji: string
  romaji: string
}
interface ScoreProps {
  word: string;
  answer: AnswerTypes;
  user: string;
}

interface ListItemProps {
  score: ScoreProps;
}

const ListItem = ({ score }: ListItemProps) => {
  const { word, answer, user } = score;

  const answers: string = `${answer['kana']} 
  ${answer['romaji']} 
  ${answer['kanji']}`

  return (
    <>
      <td className="font-bold">
          {user === answer['kana'] || user === answer['kanji'] || user === answer['romaji'] ? (
            <span className="text-[#22c55e] dark:text-[#4ade80]">correct</span>

          ) : (
            <span className="text-[#dc2626] dark:text-[#ef4444]">wrong</span>
          )}
      </td>
      <td className="w-1/5 py-2 text-center">{word}</td>
      <td className="w-1/5 py-2 text-center">{user || "-"}</td>
      <td className="w-1/5 py-2 text-center">{[answer['kanji'], answer['kana'], answer['romaji']].map((line: string, index: number) => <p key={index}>{line}</p>)}</td>
    </>
  );
};

export default ListItem;
