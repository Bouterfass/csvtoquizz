import React from "react";
import { CorrectIcon, WrongIcon } from "../icons/icons";

interface ScoreProps {
  correct: Boolean;
  question: string;
  answer: string;
  user_answer: string;
}

interface ListItemProps {
  score: ScoreProps;
}

const ListItem = ({ score }: ListItemProps) => {
  const { correct, question, answer, user_answer } = score;

  return (
    <>
      <td className="w-full py-2 flex justify-center items-center">
        {correct ? (
          <div className="w-full flex justify-center">
            <CorrectIcon width="14" height="14" />

          </div>
        ) : (
          <WrongIcon width="14" height="14" />
        )}
      </td>
      <td className="w-1/5 py-2 text-center">{answer}</td>
      <td className="w-1/5 py-2 text-center">{user_answer || "pas de réponse"}</td>
      <td className="w-1/5 py-2 text-center">{question}</td>
    </>
  );
};

export default ListItem;
