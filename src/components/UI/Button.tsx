import { ReactNode } from "react";

interface ButtonProps {
  type: "first" | "second";
  handler: () => void;
  children: ReactNode;
}

const Button = ({ type, handler, children }: ButtonProps) => {
  return type === "first" ? (
    <button
      className="w-32 rounded border-2 border-solid border-lightPurple bg-midnight py-2 px-4 transition-colors ease-in-out delay-100
        text-xl text-lightPurple hover:bg-lightPurple hover:text-lightWhite"
      onClick={handler}
    >
      {children}
    </button>
  ) : (
    <button
      className="w-48 rounded bg-midnight py-2 px-4 hover:underline
        text-xl text-lightPurple"
      onClick={handler}
    >
      {children}
    </button>
  );
};

export default Button;
