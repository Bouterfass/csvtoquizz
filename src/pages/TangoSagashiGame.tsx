import ThreePartsSection from "../components/UI/ThreePartsSection";
import Playground from "../components/UI/games/Playground";
import ScoreBoard from "../components/UI/games/ScoreBoard";
import CountDownTimer from "../components/UI/games/CountDownTimer";

import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface ScoreProps {
  word: string;
  translation: string;
  points: number;
}

const TangoSagashiGame = () => {
  const [score, setScore] = useState<Array<ScoreProps>>([]);
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    if (!location.state || !location.state.gameStarted) {
        navigate("/tango-sagashi"); // Redirige si le jeu n'a pas été correctement lancé
      }
  }, [navigate, location])

  // Récupère les scores précédemment enregistrés dans le localStorage
  useEffect(() => {
    const storedScore = localStorage.getItem("TScore");
    if (storedScore) {
      const parsedScore = JSON.parse(storedScore);
      if (Array.isArray(parsedScore)) {
        setScore(parsedScore);
      }
    }
  }, []);

  // Met à jour les scores au fur et à mesure
  const handleScore = (newScore: ScoreProps) => {
    setScore((prev) => [...prev, newScore]);
    // Sauvegarde dans localStorage
    localStorage.setItem("TScore", JSON.stringify([...score, newScore]));
  };

  const exitGame = ():void => {
    alert('finished')
  }

  return (
    <ThreePartsSection
      header={<span className="text-lightWhite">Tango Sagashi</span>}
      sizes={["35%", "30%", "35%"]}
    >
      {/* Tableau des scores */}
      <div className="h-4/5 w-full flex justify-end">
        <ScoreBoard score={score} />
      </div>

      {/* Aire de jeu */}
      <Playground onHandleScore={handleScore} />

      {/* Timer */}
      <div className="h-4/5 w-full pl-2 flex justify-start">
        <CountDownTimer duration={180} onTimeout={exitGame} />
      </div>
    </ThreePartsSection>
  );
};

export default TangoSagashiGame;
