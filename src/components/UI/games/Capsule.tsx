import React from "react";
import { CAPSULE_SIZE } from "../../../globals/variables";
interface CapsuleProps {
  char: string;
  onClick: () => void;
}

const Capsule: React.FC<CapsuleProps> = ({ char, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="rounded-5 bg-darkWhite font-extrabold border-2 border-solid border-lightPurple text-lightPurple 
      flex justify-center items-center rounded-lg hover:cursor-pointer hover:bg-lightPurple hover:text-darkWhite
      dark:bg-blackDk dark:text-lightGray dark:border-lightGray dark:hover:bg-lightGray dark:hover:border-lightPurple dark:hover:text-lightPurple
      "
      style={{ width: `${CAPSULE_SIZE}px`, height: `${CAPSULE_SIZE}px`}}
    >
      {char}
    </div>
  );
};

export default Capsule;
