import "./App.css";
import ActionButton from "./components/UI/ActionButton";
import BigTitle from "./components/UI/BigTitle";
import Section from "./components/UI/Section";
import { useNavigate } from "react-router-dom";

function App() {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/sign-in"); // Redirige l'utilisateur vers la page de connexion
  };

  return (
    <Section>

      <div className=" p-10 flex flex-col items-center justify-center">
        {/* En-tête */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-lightWhite md:text-5xl">
            Bienvenue sur <span className="text-lightPurple dark:text-darkPurple">Japanese Learning Journey</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-lightWhite max-w-2xl mx-auto">
            Découvrez une nouvelle façon amusante d'apprendre le japonais ! Explorez des jeux interactifs, testez vos compétences, et progressez en vocabulaire, grammaire et plus encore.
          </p>
        </header>

        {/* Contenu principal */}
        <main className="flex flex-col items-center space-y-6"> 
          {/* Bouton d'inscription */}
          <ActionButton
            handler={handleLogin}
          >
            Se connecter ou créer un compte
          </ActionButton>
        </main>

        {/* Pied de page */}
        <footer className="mt-12 text-center text-sm text-gray-600">
          <p>&copy; 2024 Tango Sagashi. Tous droits réservés.</p>
          <p className="mt-2">
            Développé avec ❤️ par votre équipe préférée.
          </p>
        </footer>
      </div>
    </Section>
  );
}

export default App;
