import Playground from "../components/UI/games/Playground";
import ScoreBoard from "../components/UI/games/ScoreBoard";
import ThreePartsSection from "../components/UI/ThreePartsSection";

import { useEffect, useState } from "react";

interface ScoreProps {
    word: string
    translation: string
    points: number
}

const TangoSagashi = () => {

    const [score, setScore] = useState<Array<ScoreProps>>([])

    const handleScore = (score: ScoreProps) => {
        setScore(prev => [...prev, score])
    }

    return (
        <ThreePartsSection header={<span className="text-lightWhite">Tango Sagashi</span>}
            sizes={["35%", "30%", "35%"]}>
            <ScoreBoard score={score} />
            <Playground onHandleScore={handleScore} />
            <div>3</div>
        </ThreePartsSection>
    )
}

export default TangoSagashi;