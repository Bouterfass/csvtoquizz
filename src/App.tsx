import React, { useEffect, useState } from "react";
import Settings from "./Settings";
import Papa from "papaparse";
import "./App.css";
import { csvformater } from "./utils/csvformater";
import { ArrowDown } from "./components/icons/icons";
import BigTitle from "./components/UI/BigTitle";

function App() {
  const [openSettings, setOpenSettings] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [content, setContent] = useState<Array<string[] | object>>([]);
  const [hovered, setHovered] = useState<boolean>(false);
  const [extension, setExtension] = useState<string>("");

  const handleFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;

    if (!file) {
      setOpenSettings(false);
      setSelectedFile(null);
      return;
    }

    setSelectedFile(file);

    if (file.name.endsWith(".csv")) {
      setExtension("csv");
      Papa.parse(file, {
        header: false,
        complete: (results: any) => {
          setContent((previous) => [...previous, ...results.data]);
          setOpenSettings(true);
        },
      });
    } else if (file.name.endsWith(".json")) {
      setExtension("json");
      const reader = new FileReader();
      reader.onload = (event) => {
        const jsonContent = event.target?.result;

        if (jsonContent) {
          const parsedJson = JSON.parse(jsonContent as string);
          // Si le JSON est un tableau, on l'ajoute directement
          if (Array.isArray(parsedJson)) {
            setContent((previous) => [...previous, ...parsedJson]);
          } else {
            // Sinon, on l'ajoute comme un seul objet
            setContent((previous) => [...previous, parsedJson]);
          }
          setOpenSettings(true);
        }
      };
      reader.onerror = (error) => {
        console.error("File reading error", error);
      };
      reader.readAsText(file);
    } else {
      setOpenSettings(false);
      setSelectedFile(null);
    }
  };

  useEffect(() => {
    localStorage.removeItem("score");
  }, []);

  useEffect(() => {
    const csvData = content.filter(
      (item) => Array.isArray(item) && item.every((i) => typeof i === "string")
    ) as string[][];
    if (content.length > 0) {
      csvformater(content, extension);
    }
  }, [content]);

  const closeSettings = () => {
    setOpenSettings(false);
    setSelectedFile(null);
  };

  return (
    <div className="h-screen bg-yellow flex items-center flex-col dark:bg-blackDk">
      <BigTitle>
        <h1>Quizz builder</h1>
      </BigTitle>
      <section>
        {!selectedFile && (
          <div
            className={`${
              hovered ? "bg-purple" : "bg-blue"
            } transition ease-in-out delay-100 flex items-center justify-center w-[28rem] h-[12rem] rounded-md dark:bg-black`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <label
              className={`${
                hovered
                  ? "border-white dark:border-pinkDk"
                  : "border-purple dark:border-blueDk"
              } h-full w-full flex flex-col justify-center items-center text-amber-dk border-2 border-dashed px-2 rounded-md cursor-pointer`}
              htmlFor="file"
            >
              <div className="flex flex-col items-center">
                <ArrowDown height="120" width="120" hover={hovered} />
                <span
                  className={`${
                    hovered
                      ? "text-white dark:text-pinkDk"
                      : "text-purpleDk dark:text-purple"
                  } block font-semibold h-full w-full flex items-center justify-center`}
                >
                  Drop your file here or click to choose a file
                </span>
              </div>
              <input
                className="absolute w-[28rem] h-[12rem] opacity-0 cursor-pointer"
                type="file"
                id="file"
                name="file"
                accept=".csv, .json"
                onChange={handleFile}
              />
            </label>
          </div>
        )}
        {selectedFile && openSettings && (
          <Settings
            closeSet={closeSettings}
            data={csvformater(content, extension)}
          />
        )}
      </section>
    </div>
  );
}

export default App;
