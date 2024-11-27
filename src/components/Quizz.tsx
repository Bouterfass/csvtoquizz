import { Button, Input } from "@headlessui/react";
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModeSwitcher from "./ModeSwitcher";
import { useMode } from "../context/ModeContext";
import ListenButton from "./ListenButton";

interface AnswerProps {
  romaji: string;
  kanji: string;
  kana: string;
}

interface Question {
  type: "D" | "T";
  word: string;
  answer: AnswerProps;
}

interface QuizzProps {
  questions: Array<Question>;
  title: string
  level: string
}

interface Score {
  word: string;
  answer: AnswerProps;
  user: string;
}

const Quizz = ({ questions, title, level }: QuizzProps) => {
  const [index, setIndex] = useState<number>(() => {
    const storedIndex = localStorage.getItem("tmp");
    return storedIndex ? parseInt(storedIndex, 10) : 0;
  });
  const [answer, setAnswer] = useState<string>("");
  const [score, setScore] = useState<Array<Score>>([]);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);
  const mode = useMode();
  const navigate = useNavigate();
  const curr = questions[index];

  useEffect(() => {
    const storedScore = localStorage.getItem("score");
    if (storedScore) {
      const parsedScore = JSON.parse(storedScore);
      if (Array.isArray(parsedScore)) {
        setScore(parsedScore);
      }
    }
    setIsInitialLoad(false); // Set it to false after the initial load
  }, []);

  useEffect(() => {
    if (index === questions.length) {
      localStorage.removeItem("tmp");
      navigate("/result", { state: { score: score, data: questions, title: title, level: level } });
    } else {
      localStorage.setItem("tmp", JSON.stringify(index));
    }
  }, [index]);

  useEffect(() => {
    if (!isInitialLoad) {
      localStorage.setItem("score", JSON.stringify(score));
    }
  }, [score, isInitialLoad]);

  useEffect(() => {
    if (
      curr &&
      curr.type === "D" &&
      buttonRef.current &&
      index < questions.length
    )
      buttonRef.current.focus();
  }, [curr]);

  const nextQuestion = (): void => {
    if (index < questions.length) {
      if (curr.type === "T")
        setScore((score) => [
          ...score,
          { word: curr.word, answer: curr.answer, user: answer },
        ]);
        setAnswer("");
      setIndex(index < questions.length ? index + 1 : index);
      if (inputRef.current) {
        inputRef.current.value = ""; // Reset the input value
      }
    }
  };

  const handleAnswer = (event: any) => {
    const answer = event.target.value;
    setAnswer(answer);
  };

  const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && index < questions.length) {
      if (curr.type === "T")
        setScore((score) => [
          ...score,
          { word: curr.word, answer: curr.answer, user: answer },
        ]);
      setIndex((prev) => prev + 1);
      setAnswer("");
      if (inputRef.current) {
        inputRef.current.value = ""; // Reset the input value
      }
      setAnswer("");
    }
  };

  return (
    <div className="relative p-4 m-4 flex justify-center items-center text-lightGrayL bg-blackL rounded-lg w-2/5 h-2/5">
      {index < questions.length && (
        <>
          <div className="absolute top-4 left-4">
            <ModeSwitcher />
          </div>
          <div className="absolute top-4 right-4">
            <ListenButton
              text={curr.answer[`${mode.mode}`]}
              disabled={curr.type !== "D"}
              lang="ja-JP" // Langue, par défaut "ja-JP"
            />
          </div>
          <div className="flex justify-center items-center flex-col space-y-6 w-4/5 h-fit">
            <div className="my-2">
              <span className="font-bold text-4xl">
                {curr.type === "D" ? curr.answer[`${mode.mode}`] : curr.word}
              </span>
            </div>
            {curr.type === "D" ? (
              <div className="my-2">
                <span className="font-bold text-4xl">{curr.word}</span>
              </div>
            ) : (
              <div className="my-2 flex justify-center">
                <Input
                  ref={inputRef}
                  autoFocus
                  className="w-3/5 bg-transparent text-center 
                text-2xl text-purple font-bold 
                border-blackL border-solid border-b-2 
                focus:outline-none dark:border-lightWhite"
                  name="answer"
                  type="text"
                  onChange={(event) => handleAnswer(event)}
                  onKeyDown={handleKey}
                />
              </div>
            )}
            <div className="my-2">
              <Button
                className="text-xl font-bold p-2"
                ref={buttonRef}
                onClick={nextQuestion}
              >
                suivant
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Quizz;
