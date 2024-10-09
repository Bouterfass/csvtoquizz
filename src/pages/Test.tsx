import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Question from "../components/Question";

const Test = () => {
  let location = useLocation();
  const [index, setIndex] = useState(0);

  let data = location.state.key;

  return (
    <>
      <h1>test page</h1>
      <Question question={data[index]}  />
    </>
  );
};

export default Test;
