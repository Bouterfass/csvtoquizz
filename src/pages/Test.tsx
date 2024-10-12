import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Question from "../components/Question";
import { Button } from "@headlessui/react";

interface Score {
  correct: Boolean;
  question: string;
  answer: string;
}

const Test = () => {
  let location = useLocation();
  let btnRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const [index, setIndex] = useState<number>(0);
  const [showAns, setShowAns] = useState<Boolean>(false);
  const [score, setScore] = useState<Score[]>([]);

  let data = location.state.key;
  let dataLength: number = data.length;

  useEffect(() => {
    // Rediriger vers la page finale une fois que toutes les questions ont été traitées
    if (index === dataLength && score.length === dataLength) {
      navigate("/save", { state: { score: score, data: data } });
    }
  }, [index, score, dataLength, navigate]);

  const nextQuestion = (value: string) => {
    if (index < dataLength) {
      if (value === "good") {
        setScore((score) => [
          ...score,
          { correct: true, question: data[index]["column_two"], answer: data[index]["column"] }
        ]);
        setIndex((index) => index + 1);
      } else {
        setScore((score) => [
          ...score,
          { correct: false, question: data[index]["column_two"], answer: value || "" }
        ]);
        setShowAns(true);
      }
    }
  };

  const handleAnswer = () => {
    if (showAns) {
      if (index < dataLength) {
        setIndex((index) => index + 1);
      }
      setShowAns(false);
    } else {
      setScore((score) => [
        ...score,
        { correct: false, question: data[index]["column_two"], answer: data[index]["column"] }
      ]);
      setShowAns(true);
    }
  };

  return (
    <div className="flex flex-col">
      <h1>test page</h1>
      <span>
        {index + 1}/{dataLength}
      </span>
      {!showAns && index < dataLength && (
        <Question
          question={data[index]}
          onCorrectAnswer={nextQuestion}
          id={index}
        />
      )}
      {showAns && <span>{data[index]["column"]}</span>}
      <Button
        ref={btnRef}
        className="w-32 rounded bg-midnight py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
        onClick={handleAnswer}
      >
        {!showAns ? <span>show answer</span> : <span>next</span>}
      </Button>
    </div>
  );
};

export default Test;
