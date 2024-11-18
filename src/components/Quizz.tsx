import { Button, Input } from "@headlessui/react";
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Question {
  type: "D" | "T"
  word: String
  answer: String
}

interface QuizzProps {
  type: String
  questions: Array<Question>;

}

interface Score {
  word: String
  answer: String
  user: String
}

const Quizz = ({ type, questions }: QuizzProps) => {

  const [index, setIndex] = useState<number>(0)
  const [answer, setAnswer] = useState<String>('')
  const [score, setScore] = useState<Array<Score>>([])
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);
  const navigate = useNavigate()
  const curr = questions[index]


  
  useEffect(() => {
    const storedScore = localStorage.getItem("score");
    const storedIndex: string | null = localStorage.getItem("tmp");
    if (storedScore) {
      const parsedScore = JSON.parse(storedScore);
      if (Array.isArray(parsedScore)) {
        setScore(parsedScore);
        console.log("stored index: ", storedIndex);
        if (storedIndex) {

          setIndex(!storedIndex ? 0 : parseInt(storedIndex)); // Initialize the index based on the stored score
          console.log("indexxx", index);
        }
        
      }
    }
    setIsInitialLoad(false); // Set it to false after the initial load
  }, []);


  useEffect(() => {
    localStorage.setItem("tmp", JSON.stringify(index))
    if (index === questions.length) {
      localStorage.removeItem('tmp')
      navigate("/result", { state: { score: score, data: questions } });
    }
  }, [index])

  useEffect(() => {
    if (!isInitialLoad) {
      localStorage.setItem("score", JSON.stringify(score));
    }
  }, [score, isInitialLoad]);

  useEffect(() => {
    if (curr && curr.type === 'D' && buttonRef.current && index < questions.length)
      buttonRef.current.focus();
  }, [curr])

  const nextQuestion = (): void => {
    if (index < questions.length) {
      if (curr.type === 'T')
        setScore(score => [...score, {word: curr.word, answer: curr.answer, user: answer}])
      setIndex(index < questions.length ? index + 1 : index)
      if (inputRef.current) {
        inputRef.current.value = ""; // Reset the input value
      }
    }
  }

  const handleAnswer = (event: any) => {
    const answer = event.target.value
    setAnswer(answer)
  }

  const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && index < questions.length) {
      if (curr.type === 'T')
        setScore(score => [...score, {word: curr.word, answer: curr.answer, user: answer}])
      setIndex((prev) => prev + 1);
      if (inputRef.current) {
        inputRef.current.value = "" // Reset the input value
      }
      setAnswer('')
    }

  };

  return (
    <div className="p-4 m-4 flex justify-center items-center text-lightGrayL bg-blackL rounded-lg w-2/5 h-2/5">
      {index < questions.length &&
        <div className="flex justify-center items-center flex-col border-2 border-test w-4/5 h-fit">
          <div className="my-2">
            <span className="font-bold text-4xl">{curr.type === "D" ? curr.answer : curr.word}</span>
          </div>
          {curr.type === 'D' ?
            <div className="my-2">
              <span className="font-bold text-4xl">{curr.word}</span>
            </div> :
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
            </div>}
          <div className="my-2">

            <Button
              className="text-xl font-bold p-2"
              ref={buttonRef}
              onClick={nextQuestion}
            >suivant</Button>
          </div>
        </div>}
    </div>
  );
};

export default Quizz;
