import React, { useState } from "react";
import Capsule from "./Capsule";

const Playground: React.FC = () => {
  const initialCharacters = ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ"];
  
  const [playgroundCapsules, setPlaygroundCapsules] = useState(
    initialCharacters.map((char, index) => ({
      id: index,
      char,
      position: { x: Math.random() * 400, y: Math.random() * 400 }, // Random positions
    }))
  );

  const [stackCapsules, setStackCapsules] = useState<
    Array<{ id: number; char: string }>
  >([]);

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
    <div className="relative w-4/5 h-4/5 bg-lightGrayL rounded-lg shadow-lg p-4">
      {/* Playground */}
      <div className="relative w-full h-4/5 bg-white rounded-md overflow-hidden">
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
      <div className="flex justify-center items-center h-1/5 bg-gray-200 rounded-md mt-4">
        {stackCapsules.map((capsule) => (
          <div key={capsule.id} className="mx-2">
            <Capsule
              char={capsule.char}
              onClick={() => handleStackClick(capsule.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playground;
