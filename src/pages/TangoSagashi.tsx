import { useNavigate } from "react-router-dom"
import Button from "../components/UI/Button"
import Section from "../components/UI/Section"

import { clearCache } from "../utils/clearCache"

const TangoSagashi = () => {

    const navigate = useNavigate()

    const launchGame = (): void => {
        const lastPlayed = localStorage.getItem("TSlastPlayed");
        const cooldownTime = 60 * 1000; // 5 minutes en millisecondes

        if (lastPlayed) {
            const timeSinceLastPlayed = Date.now() - parseInt(lastPlayed, 10);

            if (timeSinceLastPlayed < cooldownTime) {
                const remainingTime = Math.ceil((cooldownTime - timeSinceLastPlayed) / 1000);
                alert(`Vous devez attendre encore ${remainingTime} secondes avant de rejouer.`);
                return;
            }
        }
        clearCache(['theme'])
        // Met à jour le timestamp pour la prochaine partie
        localStorage.setItem("TSlastPlayed", Date.now().toString());
        // Lance le jeu
        navigate("/ts-game", { state: { gameStarted: true }});

    };

    return <Section>
        <div className="w-[75%] h-[65%] flex flex-col items-center justify-center space-y-4 mt-6 p-6 rounded-lg">
            <div className="text-start w-[90%]">
                <h1 className="text-3xl font-bold text-blackL dark:text-lightWhite mb-2">
                    Tango Sagashi
                </h1>
                <p className="text-md text-blackL dark:text-lightGray">
                    Apprenez le japonais tout en vous amusant ! Assemblez les mots, traduisez-les, et remportez un maximum de points dans le temps imparti.
                </p>
            </div>
            <div className="text-left w-[90%] bg-gray-100 dark:bg-blackL p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-blackL dark:text-lightWhite mb-3">
                    Règles du jeu
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-sm text-blackL dark:text-lightGray">
                    <li>
                        <strong>Temps limité :</strong> Trouvez et traduisez le maximum de mots possible avant la fin du temps.
                    </li>
                    <li>
                        <strong>Assemblage :</strong> Sélectionnez les capsules pour former des mots.
                    </li>
                    <li>
                        <strong>Validation :</strong> Un mot est validé uniquement si sa traduction correcte est fournie.
                    </li>
                    <li>
                        <strong>Points :</strong> Plus le mot est long, plus il rapporte de points.
                    </li>
                    <li>
                        <strong>Mots uniques :</strong> Les mots déjà trouvés ne peuvent pas être rejoués.
                    </li>
                </ul>
            </div>
            <div className="w-[90%] flex justify-end p-3">

                <Button type="first" handler={launchGame}>
                    Lancer une partie
                </Button>
            </div>
        </div>
    </Section>
}



export default TangoSagashi