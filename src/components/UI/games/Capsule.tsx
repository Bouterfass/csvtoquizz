import React from "react";

interface CapsuleProps {
  char: string;
  onClick: () => void;
}

const Capsule: React.FC<CapsuleProps> = ({ char, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-10 h-10 rounded-5 bg-darkWhite border-2 border-solid border-lightPurple text-lightPurple 
      flex justify-center items-center font-bold rounded-lg hover:cursor-pointer hover:bg-lightPurple hover:text-darkWhite
      dark:bg-blackDk dark:text-lightGray dark:border-lightGray dark:hover:bg-lightGray dark:hover:border-lightPurple dark:hover:text-lightPurple
      "
    >
      {char}
    </div>
  );
};

export default Capsule;
