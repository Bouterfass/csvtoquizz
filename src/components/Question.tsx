import React, { useEffect, useState } from "react";
import { Input } from "@headlessui/react";

interface Question {
  column: string;
  column_two: string;
}

interface QuestionProps {
  question: Question;
  onCorrectAnswer: (value: string) => void;
  id: number;
  showAns: Boolean;
}

const Question = ({ question, onCorrectAnswer, id, showAns }: QuestionProps) => {
  const handleChange = (event: any) => {
    const value = event.target.value;
    if (value === question.column) {
      event.target.value = "";
      onCorrectAnswer("good");
    }
  };

  const handleKey = (event: any) => {
    if (event.keyCode === 13) {
      if (event.target.value === question.column) onCorrectAnswer("good");
      else onCorrectAnswer(event.target.value);
    }
  };

  return (
    <>
      {showAns ? <span className="text-2xl text-black font-bold">{question.column}</span> : 
        <Input
        autoFocus
        className="w-80 bg-transparent text-center text-2xl text-purple font-bold border-purple border-solid border-b-2 focus:outline-none dark:border-yellowDk dark:text-yellow"
        name="answer"
        type="text"
        onChange={handleChange}
        onKeyDown={handleKey}
        />
      }
    </>
  );
};

export default Question;
