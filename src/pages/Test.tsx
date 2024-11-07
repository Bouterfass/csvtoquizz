import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Question from "../components/Question";
import { Button } from "@headlessui/react";
import CancelPopOver from "../components/UI/CancelPopOver";
import MedTitle from "../components/UI/MedTitle";

interface Score {
  correct: Boolean;
  question: string;
  answer: string;
  user_answer: string;
}

const Test = () => {
  let location = useLocation();
  let btnRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  const [index, setIndex] = useState<number>(0);
  const [showAns, setShowAns] = useState<Boolean>(false);
  const [score, setScore] = useState<Score[]>([]);
  const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true); // To track if it's the first render

  let data = location.state.key;
  const title: string = location.state.title;
  const level: string = location.state.level;
  let dataLength: number = data.length;

  // Initialize score and index from localStorage on mount
  useEffect(() => {
    const storedScore = localStorage.getItem("score");
    if (storedScore) {
      const parsedScore = JSON.parse(storedScore);
      if (Array.isArray(parsedScore)) {
        setScore(parsedScore);
        setIndex(parsedScore.length); // Initialize the index based on the stored score
      }
    }
    setIsInitialLoad(false); // Set it to false after the initial load
  }, []);

  // Update localStorage when the score changes, but skip on the first render
  useEffect(() => {
    if (!isInitialLoad) {
      localStorage.setItem("score", JSON.stringify(score));
    }
  }, [score, isInitialLoad]);

  // Navigate to the result page when the user finishes the test
  useEffect(() => {
    if (index === dataLength - 1 && score.length === dataLength) {
      navigate("/result", { state: { score: score, data: data } });
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
            user_answer: data[index]["column"],
          },
        ]);
        if (index < dataLength - 1) setIndex((index) => index + 1);
      } else {
        setScore((score) => [
          ...score,
          {
            correct: false,
            question: data[index]["column_two"],
            answer: data[index]["column"],
            user_answer: value || "",
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
          user_answer: "",
        },
      ]);
      setShowAns(true);
    }
  };

  return (
    <div className="h-screen bg-yellow dark:bg-blackDk">
      <div className="h-4/5 flex items-center justify-center flex-col">
        <MedTitle>
          <span>{title} - {level}</span>
        </MedTitle>
        <div className="flex flex-col relative  justify-center items-center rounded-xl bg-blue w-[30%] h-1/2 m-4 py-5 shadow-2xl dark:text-lightGrayL dark:bg-black dark:shadow-black-500">
          <div className="absolute top-0 right-0">
            <CancelPopOver />
          </div>
          <div className="flex items-center justify-center flex-col space-y-5 w-full h-1/2">
            <span className="text-2xl text-pinkDk font-bold dark:text-blueDk">
              {index + 1} / {dataLength}
            </span>
            <span className="text-2xl text-black font-bold dark:text-lightWhite">
              {data[index]?.column_two}
            </span>
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
              className="w-48 text-xl font-bold rounded 
              bg-blackL py-2 my-2 px-4 text-sm transition ease-in-out 
              delay-50 text-white data-[hover]:bg-transparent hover:text-lightPurple hover:border-2 hover:border-lightPurple
              dark:bg-lightWhite dark:text-blackL dark:font-bold 
              dark:hover:bg-transparent dark:hover:text-lightWhite dark:hover:border-lightWhite
              dark:hover:border-2"
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
