import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Question from "../components/Question";
import { Button } from "@headlessui/react";


const Test = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  let data = location.state.key;
  let dataLength: number = data.length;
  const nextQuestion = () => {
    if (index === dataLength) {
        navigate('/save');
    } else {
        setIndex(index => index + 1);
    }
  }

  return (
    <>
      <h1>test page</h1>
      <Question question={data[index]} />
      <Button 
      className="rounded bg-midnight py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
      onClick={nextQuestion}
      >
        next
      </Button>
    </>
  );
};

export default Test;
