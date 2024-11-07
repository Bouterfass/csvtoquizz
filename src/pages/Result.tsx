import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scoreCalculation } from "../utils/scoreCalculation";
import CountUp from "react-countup";
import { Button } from "@headlessui/react";
import ListItem from "../components/UI/ListItem";

const Save = () => {
  let location = useLocation();
  const navigate = useNavigate();

  let score = location.state.score;
  let data = location.state.data;
  let result = scoreCalculation(score);

  const handleRetry = () => {
    localStorage.removeItem('score')
    navigate(`/test/${data.length}`, { state: { key: data } });
  }
  const handleHome = () => {
    localStorage.removeItem('score')
    navigate("/");
  }
  return (
    <div className="flex flex-col w-full h-auto justify-center items-center">
      <CountUp end={result} duration={8} />
      <table className="table-fixed w-2/5 text-center">
        <thead>
          <tr className="bg-gray-200 text-md">
            <th className="w-1/5 py-2">score</th>
            <th className="w-1/5 py-2">word</th>
            <th className="w-1/5 py-2">your answer</th>
            <th className="w-1/5 py-2">correct answer</th>
          </tr>
        </thead>
        <tbody>

          {score.map((q: any, i: number) => {
            return (
              <tr className="border-b last:border-b-0" key={i}>
                <ListItem score={q} />
              </tr>
            );
          })}
        </tbody>
      </table>
      <Button
        className="w-32 rounded bg-midnight py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
        onClick={handleRetry}
      >
        retry
      </Button>
      <Button
        className="w-32 rounded bg-midnight py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
        onClick={handleHome}
      >
        back to home
      </Button>
    </div>
  );
};

export default Save;
