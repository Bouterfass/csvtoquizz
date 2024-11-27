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
  
  const answers: string = `${answer['kana']} ${answer['romaji']} ${answer['kanji']}`
  console.log(answers);

  return (
    <>
      <td className="w-full py-2 flex justify-center items-center">
        {user === answer['kana'] || user === answer['kanji'] || user === answer['romaji'] ? (
          <div className="w-full flex justify-center">
            <CorrectIcon width="14" height="14" />

          </div>
        ) : (
          <WrongIcon width="14" height="14" />
        )}
      </td>
      <td className="w-1/5 py-2 text-center">{word}</td>
      <td className="w-1/5 py-2 text-center">{user || "pas de réponse"}</td>
      <td className="w-1/5 py-2 text-center">{answers}</td>
    </>
  );
};

export default ListItem;
