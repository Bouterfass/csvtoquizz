import React from "react";

interface Question {
    column: string;
    column_two: string;
}

interface QuestionProps {
  question: Question;
}



const Question = ({ question }: QuestionProps) => {
  console.log(question.column);
  

  return <>
    {question.column_two}
  </>;
};

export default Question;
