import React from "react";

interface CapsuleProps {
  char: string;
  onClick: () => void;
}

const Capsule: React.FC<CapsuleProps> = ({ char, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-purple text-blackL font-bold cursor-pointer shadow-lg hover:scale-110 transition-transform"
    >
      {char}
    </div>
  );
};

export default Capsule;
