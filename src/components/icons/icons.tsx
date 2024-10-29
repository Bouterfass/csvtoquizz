import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";

export const ArrowDown = ({
  height,
  width,
  hover,
}: {
  height: string;
  width: string;
  hover: boolean;
}) => {

  const [color, setColor] = useState<string>("");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    arrowColor();
  }, [hover, color])

  const arrowColor = () => {
    if (theme === "dark")
      setColor(hover ? '#484b6a' : '#fafafa')
    else 
      setColor(hover ? "white" : "#484b6a")
  }

  

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-down-to-arc"
      style={{
        transition: "stroke 0.1s ease", // Ajoute une transition de 0.5s sur la couleur
      }}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 3v12" />
      <path d="M16 11l-4 4l-4 -4" />
      <path d="M3 12a9 9 0 0 0 18 0" />
    </svg>
  );
};

export const CorrectIcon = ({
  height,
  width,
}: {
  height: string;
  width: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width={width}
      height={height}
      fill="#C1E1C1"
      stroke-width="1"
      stroke="black"
    >
      <path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z" />
    </svg>
  );
};

export const WrongIcon = ({
  height,
  width,
}: {
  height: string;
  width: string;
}) => {
  return (
    <svg
      fill="#FF6961"
      height={height}
      width={width}
      stroke-width="1"
      stroke="black"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 490 490"
    >
      <polygon
        points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 
	489.292,457.678 277.331,245.004 489.292,32.337 "
      />
    </svg>
  );
};
