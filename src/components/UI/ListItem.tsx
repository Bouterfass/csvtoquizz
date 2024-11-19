import React from "react";
import { CorrectIcon, WrongIcon } from "../icons/icons";

interface ScoreProps {
  word: string;
  answer: string;
  user: string;
}

interface ListItemProps {
  score: ScoreProps;
}

const ListItem = ({ score }: ListItemProps) => {
  const { word, answer, user } = score;
  console.log(score);
  

  return (
    <>
      <td className="w-full py-2 flex justify-center items-center">
        {user === answer ? (
          <div className="w-full flex justify-center">
            <CorrectIcon width="14" height="14" />

          </div>
        ) : (
          <WrongIcon width="14" height="14" />
        )}
      </td>
      <td className="w-1/5 py-2 text-center">{answer}</td>
      <td className="w-1/5 py-2 text-center">{user || "pas de réponse"}</td>
      <td className="w-1/5 py-2 text-center">{word}</td>
    </>
  );
};

export default ListItem;
