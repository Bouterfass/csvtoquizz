import React, { useEffect, useState } from "react";

interface CountDownTimerProps {
  duration: number; // Durée totale en secondes
  onTimeout: () => void; // Callback optionnel à exécuter quand le timer est terminé
}

const CountDownTimer: React.FC<CountDownTimerProps> = ({ duration, onTimeout }) => {
  const [timeLeft, setTimeLeft] = useState<number>(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      // Exécute le callback une fois la barre visuellement vide
      const timeout = setTimeout(() => {
        if (onTimeout) onTimeout();
      }, 1000); // Attendre 1 seconde pour la transition finale
      return () => clearTimeout(timeout);
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0)); // Réduit le temps restant
    }, 1000);

    return () => clearInterval(interval); // Nettoie l'intervalle
  }, [timeLeft, onTimeout]);

  // Calcul de la hauteur dynamique
  const heightPercentage = (timeLeft / duration) * 100;

  return (
    <div className="w-4 h-full bg-lightGrayL dark:bg-black border border-lightGrayD rounded-lg relative overflow-hidden">
      {/* Barre dynamique */}
      <div
        className="absolute bottom-0 w-full bg-gradient-to-b from-green-400 via-yellow-400 to-red-400"
        style={{
          height: `${heightPercentage}%`, // Hauteur basée sur le temps restant
          transition: "height 1s linear", // Transition fluide
        }}
      />
    </div>
  );
};

export default CountDownTimer;
