import React, { useEffect, useState } from "react";
import Settings from "./Settings";
import Papa from "papaparse";
import "./App.css";
import { ArrowDown } from "./components/icons/icons";
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
