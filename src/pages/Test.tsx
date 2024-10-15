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
          {
            correct: true,
            question: data[index]["column_two"],
            answer: data[index]["column"],
          },
        ]);
        setIndex((index) => index + 1);
      } else {
        setScore((score) => [
          ...score,
          {
            correct: false,
            question: data[index]["column_two"],
            answer: value || "",
          },
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
        {
          correct: false,
          question: data[index]["column_two"],
          answer: data[index]["column"],
        },
      ]);
      setShowAns(true);
    }
  };

  return (
    <div className="h-screen bg-yellow">
      <h1>test page</h1>
      <div className="h-4/5 flex items-center justify-center flex-col">
        <div className="flex flex-col justify-center items-center rounded-xl bg-blue w-1/2 h-1/2 m-10 py-5 shadow-2xl">
          <div className="flex items-center justify-center flex-col space-y-5 w-full h-1/2 border-dotted border-b-4 border-purple">
            <span className="text-2xl">
              {index + 1} / {dataLength}
            </span>
            <span className="text-2xl">{data[index].column_two}</span>
          </div>
          <div className="flex items-center justify-center flex-col space-y-5 w-full h-1/2">
            {index < dataLength && (
              <Question
                question={data[index]}
                onCorrectAnswer={nextQuestion}
                id={index}
                showAns={showAns}
              />
            )}
            <Button
              ref={btnRef}
              className="w-32 rounded bg-midnight py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
              onClick={handleAnswer}
            >
              {!showAns ? <span>show answer</span> : <span>next</span>}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
