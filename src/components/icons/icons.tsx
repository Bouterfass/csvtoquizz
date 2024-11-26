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
  }, [hover, color]);

  const arrowColor = () => {
    if (theme === "dark") setColor(hover ? "#484b6a" : "#fafafa");
    else setColor(hover ? "white" : "#484b6a");
  };

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

export const SoundIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 512 512"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>sound-loud-filled</title>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="icon"
          fill="#ffffffff"
          transform="translate(42.666667, 85.333333)"
        >
          <path
            d="M361.299413,341.610667 L328.014293,314.98176 C402.206933,233.906133 402.206933,109.96608 328.013013,28.8906667 L361.298133,2.26304 C447.910187,98.97536 447.908907,244.898347 361.299413,341.610667 Z M276.912853,69.77216 L243.588693,96.4309333 C283.38432,138.998613 283.38304,204.87488 243.589973,247.44256 L276.914133,274.101333 C329.118507,215.880107 329.118507,127.992107 276.912853,69.77216 Z M191.749973,1.42108547e-14 L80.8957867,87.2292267 L7.10542736e-15,87.2292267 L7.10542736e-15,257.895893 L81.0208,257.895893 L191.749973,343.35424 L191.749973,1.42108547e-14 L191.749973,1.42108547e-14 Z"
            id="Shape"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export const SoundMuted = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 512 512"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>sound-off-filled</title>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="icon" fill="#ffffffff" transform="translate(42.666667, 59.581722)">
          <path
            d="M47.0849493,-1.42108547e-14 L298.668,251.583611 L304.101001,257.015597 L304.101,257.016 L353.573532,306.488791 C353.573732,306.488458 353.573933,306.488124 353.574133,306.48779 L384.435257,337.348961 L384.434,337.349 L409.751616,362.666662 L379.581717,392.836561 L191.749,205.003 L191.749973,369.105851 L81.0208,283.647505 L7.10542736e-15,283.647505 L7.10542736e-15,112.980838 L80.8957867,112.980838 L91.433,104.688 L16.9150553,30.169894 L47.0849493,-1.42108547e-14 Z M361.298133,28.0146513 C429.037729,103.653701 443.797162,209.394226 405.578884,298.151284 L372.628394,265.201173 C396.498256,194.197542 381.626623,113.228555 328.013013,54.642278 L361.298133,28.0146513 Z M276.912853,95.5237713 C305.539387,127.448193 318.4688,168.293162 315.701304,208.275874 L266.464558,159.040303 C261.641821,146.125608 254.316511,133.919279 244.488548,123.156461 L243.588693,122.182545 L276.912853,95.5237713 Z M191.749973,25.7516113 L191.749,84.3256113 L158.969,51.5456113 L191.749973,25.7516113 Z"
            id="Combined-Shape"
          ></path>
        </g>
      </g>
    </svg>
  );
};
