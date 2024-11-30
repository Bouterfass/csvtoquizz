import { useLocation, useNavigate } from "react-router-dom";
import { scoreCalculation } from "../utils/scoreCalculation";
import CountUp from "react-countup";
import ListItem from "../components/UI/ListItem";
import Button from "../components/UI/Button";
import Section from "../components/UI/Section";
import { clearCache } from "../utils/clearCache";

const Save = () => {
  let location = useLocation();
  const navigate = useNavigate();
  let score = location.state.score;
  let data = location.state.data;
  let title: string = location.state.title
  let level: string = location.state.level
  let result: number = scoreCalculation(score)


  const color = (): string => {
    if (result < 33)
      return "#dc2626"
    if (result >= 33 && result <= 75)
      return "#f97316"
    return "#22c55e"
  }

  console.log(color());
  console.log(result);


  const handleRetry = () => {
    clearCache(['theme'])
    navigate(`/test/${data.length}`, { state: { key: data, title: title, level: level } });
  }
  const handleHome = () => {
    clearCache(['theme'])
    navigate("/");
  }

  let displayer = <div className={`my-10 text-[3rem] font-bold`}>
    <span style={{ color: color() }}><CountUp end={result} duration={8} /></span>
    <span style={{ color: color() }} >%</span>
  </div>

  return (
    <Section className="flex flex-col w-full h-auto justify-center items-center">
      {displayer}
      <table className="table-fixed w-3/5 text-center">
        <thead>
          <tr className="bg-lightGray text-md dark:bg-lightPurple dark:text-lightWhite">
            <th className="w-1/5 py-2">score</th>
            <th className="w-1/5 py-2">word</th>
            <th className="w-1/5 py-2">your answer</th>
            <th className="w-1/5 py-2">answers</th>
          </tr>
        </thead>
        <tbody>

          {score.map((q: any, i: number) => {
            return (
              <tr className="border-b font-bold border-lightGray dark:border-lightPurple dark:bg-black dark:text-lightGrayL  last:border-b-0" key={i}>
                <ListItem score={q} />
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="my-6 w-1/5 flex justify-center items-center">

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
    </Section>
  );
};

export default Save;
