import React, { useEffect, useState } from "react";
import Capsule from "./Capsule";
import useWindowSize from "../../../hooks/useWindowSize";
import { Input } from "@headlessui/react";


export const foundWord = (word: string, words: Array<{ word: string, translation: string }>): string | undefined => {

  const w = words.find(w => w.word === word)
  if (w)
    return w.translation
  return undefined
}

const Playground: React.FC = () => {
  const initialCharacters = ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ",
    "さ", "し"];


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
    { word: "あした", translation: "demain" }
  ];

  const [color, setColor] = useState<string>("#818181")
  const [found, setFound] = useState<{ isFound: boolean, data: { word: string | undefined, translation: string | undefined } }>({ isFound: false, data: { word: "", translation: "" } })
  const { width, height } = useWindowSize()

  const [playgroundCapsules, setPlaygroundCapsules] = useState(
    initialCharacters.map((char, index) => ({
      id: index,
      char,
      position: { x: Math.random() * ((width - width / 5) - 100), y: Math.random() * (((height * 4 / 5) - height / 5) - 100) }, // Random positions
    }))
  );

  const [stackCapsules, setStackCapsules] = useState<
    Array<{ id: number; char: string }>
  >([]);


  useEffect(() => {

    const combinedString = stackCapsules.map(c => c.char).join('')
    let foundword = foundWord(combinedString, availableWords)

    if (foundword) {
      let translation = availableWords.find(s => s.word === foundword)

      setColor("#22c55e")
      setFound({
        isFound: true,
        data: { word: translation?.word, translation: translation?.translation }
      }
      )

    } else {
      setColor("#818181")
      setFound({
        isFound: false,
        data: { word: "", translation: "" }
      })
    }
  }, [stackCapsules])

  const handleCapsuleClick = (id: number) => {
    // Move capsule from Playground to Stack
    const clickedCapsule = playgroundCapsules.find((capsule) => capsule.id === id);
    if (clickedCapsule) {
      setPlaygroundCapsules((prev) =>
        prev.filter((capsule) => capsule.id !== id)
      );
      setStackCapsules((prev) => [...prev, clickedCapsule]);
    }


  };

  const handleStackClick = (id: number) => {
    // Move capsule from Stack to Playground
    const clickedCapsule = stackCapsules.find((capsule) => capsule.id === id);
    if (clickedCapsule) {
      setStackCapsules((prev) =>
        prev.filter((capsule) => capsule.id !== id)
      );
      setPlaygroundCapsules((prev) => [
        ...prev,
        { ...clickedCapsule, position: { x: Math.random() * 400, y: Math.random() * 400 } }, // Add new random position
      ]);
    }


  };

  return (
    <div className="relative w-4/5 h-4/5 bg-lightGrayL rounded-lg shadow-lg p-4
                    dark:bg-blackL">
      {/* Playground */}
      <div className="relative w-full h-4/5 bg-white rounded-md
            dark:bg-black">
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
      <div className="flex flex-col justify-center space-y-3 items-center h-1/5 bg-gray-200 
        rounded-md my-2 dark:bg-black dark:border-2 dark:border-solid dark:border-darkGray"
        style={{ border: `2px solid ${color}` }}>
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
        {found.isFound && <div>
          <Input  className=" bg-transparent text-center 
                text-xl text-blackL font-bold 
                border-blackL border-solid border-b-2 
                focus:outline-none dark:border-lightWhite 
                dark:text-lightGrayL "/>
        </div>
        }
      </div>
    </div>
  );
};

export default Playground;
