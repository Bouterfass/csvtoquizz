import "./App.css";
import BigTitle from "./components/UI/BigTitle";
import Section from "./components/UI/Section";

function App() {


  return (
    <Section className="h-screen flex items-center flex-col">
      <BigTitle>
        <h1>Quizz builder</h1>
      </BigTitle>
      <section>
        <h2>Home page</h2>
      </section>
    </Section>
  );
}

export default App;
