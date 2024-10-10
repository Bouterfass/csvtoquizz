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
}

const Question = ({ question, onCorrectAnswer, id }: QuestionProps) => {
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
      else onCorrectAnswer("bad");
    }
  };

  return (
    <>
      <span>{question.column_two}</span>
      <Input
        autoFocus
        className="w-80 border-solid border-2 border-midnight"
        name="answer"
        type="text"
        onChange={handleChange}
        onKeyDown={handleKey}
      />
    </>
  );
};

export default Question;
