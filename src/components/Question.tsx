import React from "react";

interface Question {
    column: string;
    column_two: string;
}

interface QuestionProps {
  question: Question;
}



const Question = ({ question }: QuestionProps) => {  

  return <>
    {question.column_two}
  </>;
};

export default Question;
