import Section from "../components/UI/Section";
import BigTitle from "../components/UI/BigTitle";
import Card from "../components/UI/Card";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { csvformater } from "../utils/csvformater";

interface QuizzProps {
  filename: string;
  title: string;
  language: string;
  level: string;
  stats: number | undefined;
}

const Train = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState<Array<string[] | object>>([])
  let result;

  const nbOfQuestions = (file: string) => {
    try {
      let data = require(`../data/${file}`);
      if (Array.isArray(data)) return data.length;
      else return Object.keys(data).length;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  const loadJson = async (fileName: string) => {
    try {
      const response = await fetch(`${process.env.PUBLIC_URL}/data/${fileName}`);
      if (!response.ok) throw new Error("Erreur de chargement du fichier JSON");
  
      const data = await response.json();
      setContent((previous) => [
        ...previous,
        ...(Array.isArray(data) ? data : [data]),
      ]);
    } catch (error) {
      console.error("Erreur lors du chargement du fichier JSON :", error);
    }
  };

  const available_quizz = [
    {
      filename: "english_bd_easy.json",
      title: "body parts",
      level: "easy",
      language: "anglais",
      stats: nbOfQuestions("english_bd_easy.json"),
    },
    {
      filename: "english_bd_med.json",
      title: "body parts",
      level: "medium",
      language: "anglais",
      stats: nbOfQuestions("english_bd_med.json"),
    },
    {
      filename: "english_bd_hard.json",
      title: "body parts",
      level: "hard",
      language: "anglais",
      stats: nbOfQuestions("english_bd_hard.json"),
    },
    {
      filename: "japanese_bd_hard.json",
      title: "body parts",
      level: "medium",
      language: "japonais",
      stats: nbOfQuestions("japanese_bd_hard.json"),
    },
    {
      filename: "english_bd_hard.json",
      title: "body parts",
      level: "medium",
      language: "japonais",
      stats: nbOfQuestions("japanese_bd_hard.json"),
    },
    {
      filename: "english_bd_hard.json",
      title: "body parts",
      level: "hard",
      language: "japonais",
      stats: nbOfQuestions("japanese_bd_hard.json"),
    },
  ];

  const moveTo = (fileName: any) => {

    loadJson(fileName)      
    if (content.length > 0) {
        result = csvformater(content, "json");
        navigate(`/test/${fileName}`, { state: { key: result } });
      } else {
        console.error("Erreur: le contenu est vide après le chargement.");
      }
  };

  return (
    <Section>
      <BigTitle>Training page</BigTitle>
      <div className="mt-[5rem] h-[400px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {available_quizz.map((q, index) => {
            return (
              <Card<QuizzProps> data={q} key={index} onClick={() => moveTo(q.filename)}>
                <h2>{q.language}</h2>
                <p>Level: {q.level}</p>
                <p>{q.stats}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Train;
