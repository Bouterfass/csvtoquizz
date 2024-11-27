import { ReactNode } from "react";

interface ButtonProps {
  type: "first" | "second";
  handler: () => void;
  children: ReactNode;
}

const Button = ({ type, handler, children }: ButtonProps) => {
  return type === "first" ? (
    <button
      className="w-32 rounded border-2 border-solid border-blackL hover:border-lightPurple py-2 px-4 transition-colors ease-in-out delay-50
        text-lg text-black hover:bg-lightPurple hover:text-lightWhite
        dark:text-lightWhite dark:border-lightWhite dark:hover:border-lightPurple
        "
      onClick={handler}
    >
      {children}
    </button>
  ) : (
    <button
      className="w-48 rounded py-2 px-4 hover:underline
        text-md text-black
        dark:text-lightWhite"
      onClick={handler}
    >
      {children}
    </button>
  );
};

export default Button;
