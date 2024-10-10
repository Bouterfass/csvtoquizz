import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Question from "../components/Question";
import { Button } from "@headlessui/react";

const Test = () => {
  let location = useLocation();
  let btnRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const [index, setIndex] = useState<number>(0);
  const [showAns, setShowAns] = useState<Boolean>(false);

  let data = location.state.key;
  let dataLength: number = data.length;




  const nextQuestion = (value: string) => {
    if (index === dataLength - 1) {
      navigate("/save");
    } else {
      if (value === "good") setIndex((index) => index + 1);
      else setShowAns(true);
    }
  };

  const handleAnswer = () => {
    if (showAns) {
      setIndex((index) => index + 1);
      setShowAns(false);
    } else {
      setShowAns(true);
    }
  };

  return (
    <div className="flex flex-col">
      <h1>test page</h1>
      <span>
        {index + 1}/{dataLength}
      </span>
      {!showAns && (
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
