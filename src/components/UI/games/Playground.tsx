import React, { useEffect, useState, useRef } from "react";
import Capsule from "./Capsule";
import { Input } from "@headlessui/react";
import { CAPSULE_SIZE } from "../../../globals/variables";
import { foundWord } from "../../../utils/foundWord";
import { getTsPoints } from "../../../utils/getTsPoints";


interface ScoreProps {
  word: string
  translation: string
  points: number
}

interface PlaygroundProps {
  onHandleScore: (score: ScoreProps) => void;
}

const Playground: React.FC<PlaygroundProps> = ({ onHandleScore }) => {


  const availableWords = [
    { word: "あおい", translation: "bleu" },
    { word: "さけ", translation: "saumon" },
    { word: "すし", translation: "sushi" },
    { word: "とけい", translation: "montre" },
    { word: "かお", translation: "visage" },
    { word: "いけ", translation: "étang" },
    { word: "つくえ", translation: "bureau" },
    { word: "てがみ", translation: "lettre" },
    { word: "こと", translation: "chose" },
    { word: "あした", translation: "demain" },
  ];

  const initialCharacters: string[] = [
    ...new Set(availableWords.flatMap((item) => Array.from(item.word))),
  ];
  

  const [answer, setAnswer] = useState<string>("")
  const [color, setColor] = useState<string>("#818181");
  const [found, setFound] = useState<{
    isFound: boolean;
    data: {
      word: string;
      translation: string;
    };
  }>({ isFound: false, data: { word: "", translation: "" } })
  const [alreadyFound, setAlreadyFound] = useState<boolean>(false)
  const [translationError, setTranslationError] = useState<boolean>(false)
  const [score, setScore] = useState<Array<ScoreProps>>(() => {
    // Charger depuis localStorage lors de l'initialisation
    const storedScore = localStorage.getItem("TScore");
    return storedScore ? JSON.parse(storedScore) : []
  })
  const playgroundRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [playgroundCapsules, setPlaygroundCapsules] = useState<
    Array<{
      id: number;
      char: string;
      position: { x: number; y: number };
      initialPosition: { x: number; y: number };
    }>
  >([]);

  const [stackCapsules, setStackCapsules] = useState<
    Array<{
      id: number;
      char: string;
      initialPosition: { x: number; y: number };
    }>
  >([]);

  const isOverlapping = (
    pos1: { x: number; y: number },
    pos2: { x: number; y: number }
  ): boolean => {
    const distance = Math.sqrt(
      Math.pow(pos1.x - pos2.x, 2) + Math.pow(pos1.y - pos2.y, 2)
    );
    return distance < CAPSULE_SIZE; // Si la distance est inférieure à la taille de la capsule, elles se chevauchent
  };

  const generateNonOverlappingCapsules = (
    characters: string[],
    bounds: DOMRect
  ) => {
    const capsules: {
      id: number;
      char: string;
      position: { x: number; y: number };
      initialPosition: { x: number; y: number };
    }[] = [];

    characters.forEach((char, index) => {
      let newPosition: { x: number; y: number } = { x: 0, y: 0 };
      let attempts = 0;
      do {
        // Générer une position aléatoire
        newPosition = {
          x: Math.random() * (bounds.width - CAPSULE_SIZE),
          y: Math.random() * (bounds.height - CAPSULE_SIZE),
        };

        // Vérifie si cette position est valide
        const isValid = !capsules.some((capsule) =>
          isOverlapping(capsule.position, newPosition)
        );

        if (isValid) {
          capsules.push({
            id: index,
            char,
            position: newPosition,
            initialPosition: newPosition,
          });
          break;
        }

        attempts++;
        if (attempts > 100) {
          console.warn(
            "Failed to find non-overlapping position after 100 attempts"
          );
          break;
        }
      } while (true);
    });

    return capsules;
  };

  useEffect(() => {
    if (playgroundRef.current) {
      const playgroundBounds = playgroundRef.current.getBoundingClientRect();

      const capsules = generateNonOverlappingCapsules(
        initialCharacters,
        playgroundBounds
      );

      setPlaygroundCapsules(capsules);
    }
  }, [playgroundRef]);

  useEffect(() => {
    const storedScore = localStorage.getItem("TScore")
    if (storedScore) {
      const parsedScore = JSON.parse(storedScore)
      if (Array.isArray(parsedScore)) {
        setScore(parsedScore)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("TScore", JSON.stringify(score))
  }, [score])

  useEffect(() => {
    const combinedString = stackCapsules.map((c) => c.char).join("");
    let foundword = foundWord(combinedString, availableWords);

    if (foundword) {

      let translation = availableWords.find((s) => s.translation === foundword);
      let scoreWords: Array<string> = score.map(w => w.word)
      if (!translation) {
        throw new Error(`Translation for word "${foundword}" not found`);
      }
      if (scoreWords.includes(translation.word)) {

        setAlreadyFound(true)
        setColor("#dc2626")
      } else {
        setColor("#22c55e");
        setFound({
          isFound: true,
          data: {
            word: translation.word,
            translation: translation.translation,
          },
        });
      }
    } else {
      setColor('#9394a5');
      setFound({
        isFound: false,
        data: { word: "", translation: "" },
      });
    }
  }, [stackCapsules]);

  useEffect(() => {
    if (found.isFound && inputRef.current) {
      inputRef.current.focus();
    }
  }, [found.isFound]);

  useEffect(() => {
    if (alreadyFound) {
      const timer = setTimeout(() => {
        setAlreadyFound(false);
        setColor('#9394a5')
      }, 2000); // 3 secondes

      // Nettoyage : annuler le timer si `alreadyFound` change avant la fin
      return () => clearTimeout(timer);
    }
  }, [alreadyFound]);

  useEffect(() => {
    if (translationError) {
      const timer = setTimeout(() => {
        setTranslationError(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [translationError]);

  const handleCapsuleClick = (id: number) => {
    // Move capsule from Playground to Stack
    const clickedCapsule = playgroundCapsules.find(
      (capsule) => capsule.id === id
    );
    if (clickedCapsule) {
      setStackCapsules((prev) => [...prev, clickedCapsule]);
    }
  };

  const cleanStack = () => {
    stackCapsules.forEach(stack => {
      setPlaygroundCapsules((prev) => [
        ...prev,
        {
          id: stack.id,
          char: stack.char,
          position: stack.initialPosition,
          initialPosition: stack.initialPosition,
        },
      ]);
      setStackCapsules([]);
    })

  }

  const handleStackClick = (id: number) => {
    const clickedCapsule = stackCapsules.find((capsule) => capsule.id === id);

    if (clickedCapsule) {
      setStackCapsules((prev) => prev.filter((capsule) => capsule.id !== id));
    }
  };

  const handleAnswer = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // L'utilisateur a appuyé sur Enter
      if (found.isFound && answer === found.data.translation) {
        // Traduction correcte
        const newScore: ScoreProps = {
          word: found.data.word,
          translation: answer,
          points: getTsPoints(found.data.word),
        };
        setScore((prev) => [...prev, newScore]);
        onHandleScore(newScore);
        setAnswer("");
        setFound({
          isFound: false,
          data: { word: "", translation: "" },
        });
      } else {
        // Traduction incorrecte
        setTranslationError(true);
      }
    }
  };


  return (
    <div
      className="relative w-full h-4/5 bg-lightGrayL rounded-lg shadow-lg p-4
                    dark:bg-blackL"
    >
      {/* Playground */}
      <div
        ref={playgroundRef}
        className="relative w-full h-4/5 bg-white rounded-md
            dark:bg-black"
      >
        {playgroundCapsules.map((capsule) => (
          <div
            key={capsule.id}
            style={{
              position: "absolute",
              left: capsule.position.x,
              top: capsule.position.y,
            }}
          >
            <Capsule
              char={capsule.char}
              onClick={() => handleCapsuleClick(capsule.id)}
            />
          </div>
        ))}
      </div>

      {/* Stack */}
      <div
        className="flex flex-col justify-center space-y-3 items-center h-1/5 bg-gray-200 
        rounded-md my-2 dark:bg-black dark:border-2 dark:border-solid dark:border-darkGray"
        style={{ border: `2px solid ${color}` }}
      >
        <div className="flex">
          {stackCapsules.map((capsule) => (
            <div key={capsule.id} className="mx-1">
              <Capsule
                char={capsule.char}
                onClick={() => handleStackClick(capsule.id)}
              />
            </div>
          ))}
        </div>
        {found.isFound && (
          <div>
            <Input
              ref={inputRef}
              type="text"
              name="answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              onKeyDown={handleAnswer}
              className=" bg-transparent text-center 
                text-xl text-blackL font-bold 
                border-blackL border-solid border-b-2 
                focus:outline-none dark:border-lightWhite 
                dark:text-lightGrayL "
            />
          </div>
        )}
        {alreadyFound && (
          <div className="font-bold text-error text-sm">
            <span>Mot déjà trouvé! </span>
          </div>
        )}
        {translationError && (
          <div className="font-bold text-error text-sm">
            <span>Traduction incorrecte!</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Playground;
