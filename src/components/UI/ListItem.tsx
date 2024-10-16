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
    <div className="flex text-xl bg-purple items-center space-x-10 w-full rounded-md px-6 py-4">
      <div className="flex items-center">
        <span>
          {correct ? (
            <CorrectIcon width="32" height="32" />
          ) : (
            <WrongIcon width="32" height="32" />
          )}
        </span>
      </div>

      <span>{answer}</span>
      <span>{user_answer ? user_answer : "pas de réponse"}</span>
      <span>{question}</span>
    </div>
  );
};

export default ListItem;
