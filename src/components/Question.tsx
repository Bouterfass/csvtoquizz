import React, { useEffect, useState } from "react";
import { Input } from '@headlessui/react'

interface Question {
    column: string;
    column_two: string;
}

interface QuestionProps {
  question: Question;
  onCorrectAnswer: (value: string) => void;
  key: number;
}



const Question = ({ question, onCorrectAnswer, key }: QuestionProps) => {  

 
  

  const handleChange = (event: any) => {
    const value = event.target.value;
    if (value === question.column) {
      event.target.value = "";
      onCorrectAnswer("good");
    }

  }

  return <>
    <span>{question.column_two}</span>
    <Input 
    className="w-80 border-solid border-2 border-midnight"
    name="answer" 
    type="text"
    onChange={handleChange} />
  </>;
};

export default Question;
