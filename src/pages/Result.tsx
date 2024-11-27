import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scoreCalculation } from "../utils/scoreCalculation";
import CountUp from "react-countup";
import ListItem from "../components/UI/ListItem";
import Button from "../components/UI/Button";

const Save = () => {
  let location = useLocation();
  const navigate = useNavigate();

  let score = location.state.score;
  let data = location.state.data;
  let result = scoreCalculation(score);

  console.log("result ", result);
  
  const handleRetry = () => {
    localStorage.removeItem('score')
    localStorage.removeItem('tmp')
    navigate(`/test/${data.length}`, { state: { key: data } });
  }
  const handleHome = () => {
    localStorage.removeItem('score')
    localStorage.removeItem('tmp')
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
            <th className="w-1/5 py-2">possible answers</th>
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
      <div className="my-6 w-2/5 flex justify-center items-center">

      <Button
        type="first"
        handler={handleRetry}
        >
        retry
      </Button>
      <Button
        type="second"
        handler={handleHome}
        >
        back to home
      </Button>
        </div>
    </div>
  );
};

export default Save;
