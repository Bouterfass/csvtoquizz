import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Quizz from "../components/Quizz";
import MedTitle from "../components/UI/MedTitle";
import Section from "../components/UI/Section";


const Test = () => {
  let location = useLocation();

  let data = location.state.key;
  const title: string = location.state.title;
  const level: string = location.state.level;

  return (
    <Section>
      <div className="h-full w-full flex items-center justify-center flex-col">
        <MedTitle>
          <span>{title} - {level}</span>
        </MedTitle>
        <Quizz questions={data} title={title} level={level} />
      </div>
    </Section>
  );
};

export default Test;
