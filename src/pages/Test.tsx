import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Quizz from "../components/Quizz";
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

  let data = location.state.key;
  const title: string = location.state.title;
  const level: string = location.state.level;
  const type: string = location.state.type;

  return (
    <div className="h-screen bg-yellow dark:bg-blackDk">
      <div className="h-4/5 flex items-center justify-center flex-col">
        <MedTitle>
          <span>{title} - {level}</span>
        </MedTitle>
        <Quizz type={type} questions={data} />
      </div>
    </div>
  );
};

export default Test;
