import { useEffect, useState } from "react";
import Section from "../components/UI/Section";
import BigTitle from "../components/UI/BigTitle";
import Card from "../components/UI/Card";
import { useNavigate } from "react-router-dom";
import learningQMaker from "../utils/learningQMaker";


interface PatternItem {
  type: 'D' | 'T';
  word: string;
  answer?: string;
}

interface QuizzProps {
  filename: string;
  title: string;
  language: string;
  level: string;
  stats: number | null;
}

const Train = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState<Record<string, string>>({});
  const [fileLoaded, setFileLoaded] = useState(false);
  const [currentFile, setCurrentFile] = useState<string>("");
  const [quizzData, setQuizzData] = useState<any[]>([]);
  let result: PatternItem[] = [];

  const nbOfQuestions = async (file: string) => {
    try {
      const response = await fetch(`${process.env.PUBLIC_URL}/data/${file}`);
      if (!response.ok) throw new Error("Erreur de chargement du fichier JSON");
  
      const data = await response.json();
  
      return Array.isArray(data) ? data.length : Object.keys(data).length;
    } catch (error) {
      console.error("Erreur lors du chargement du fichier JSON :", error);
      return null;
    }
  };
  
  const getTitleByFilename = (filename: string) => {
    const quiz = quizzData.find((q) => q.filename === filename);
    return quiz ? quiz.title : "Title not found";
  };

  const getLevelByFilename = (filename: string) => {
    const quiz = quizzData.find(q => q.filename === filename);
    return quiz ? quiz.level : "Level not found"
  }

  const loadJson = async (fileName: string | null) => {
    try {
      const response = await fetch(`${process.env.PUBLIC_URL}/data/${fileName}`);
      if (!response.ok) throw new Error("Erreur de chargement du fichier JSON");

      const data = await response.json();
      setContent(data);
      setFileLoaded(true); // Indique que le fichier a été chargé
    } catch (error) {
      console.error("Erreur lors du chargement du fichier JSON :", error);
      setFileLoaded(false);
    }
  };

  const moveTo = (fileName: string) => {
    setCurrentFile(fileName); 
    loadJson(fileName); 
  };

  useEffect(() => {
    if (fileLoaded && content) {
      result= learningQMaker(content, "spaced");
      navigate(`/test/${currentFile}`, { state: { key: result, title: getTitleByFilename(currentFile), level: getLevelByFilename(currentFile), type: "spaced" } });
      setFileLoaded(false);
    }
  }, [fileLoaded, content, navigate, currentFile]);


  useEffect(() => {
    const loadData = async () => {
      const availableQuizz = [
        { filename: "english_bp_easy.json", title: "body parts", level: "easy", language: "anglais", stats: null },
        { filename: "english_bp_med.json", title: "body parts", level: "medium", language: "anglais", stats: null },
        { filename: "english_bp_hard.json", title: "body parts", level: "hard", language: "anglais", stats: null },
        { filename: "japanese_bp_easy.json", title: "body parts", level: "medium", language: "japonais", stats: null },
        { filename: "japanese_bp_med.json", title: "body parts", level: "medium", language: "japonais", stats: null },
        { filename: "japanese_bp_hard.json", title: "body parts", level: "medium", language: "japonais", stats: null },
      ];
    
      const quizzWithStats = await Promise.all(
        availableQuizz.map(async (quiz) => {
          const stats = await nbOfQuestions(quiz.filename);
          return { ...quiz, stats };
        })
      );

      setQuizzData(quizzWithStats);
    };
    localStorage.removeItem("score")
    localStorage.removeItem('tmp')
    loadData();
  }, []);

  return (
    <Section>
      <BigTitle>Training page</BigTitle>
      <div className="mt-[5rem] h-[400px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {quizzData.map((q, index) => (
            <Card<QuizzProps> data={q} key={index} onClick={() => moveTo(q.filename)}>
              <h2>{q.language}</h2>
              <p>Level: {q.level}</p>
              <p>{q.stats}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Train;
