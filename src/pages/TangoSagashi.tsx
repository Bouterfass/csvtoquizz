import Playground from "../components/UI/games/Playground";
import ScoreBoard from "../components/UI/games/ScoreBoard";
import ThreePartsSection from "../components/UI/ThreePartsSection";

const TangoSagashi = () => {
    return (<>
        <ThreePartsSection header={<span className="text-lightWhite">Tango Sagashi</span>}
            sizes={["35%", "30%", "35%"]}>
            <ScoreBoard />
            <Playground />
            <div>3</div>
        </ThreePartsSection>
    </>
    )
}

export default TangoSagashi;