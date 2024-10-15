import React, { useEffect, useState } from "react";
import Settings from "./Settings";
import Papa from "papaparse";
import "./App.css";
import { csvformater } from "./utils/csvformater";
import { ArrowDown } from "./components/icons/icons";

function App() {
  const [openSettings, setOpenSettings] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [content, setContent] = useState<Array<string[]>>([]);
  const [hovered, setHovered] = useState<boolean>(false);

  const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null; // Récupère le premier fichier sélectionné
    if (file) {
      setOpenSettings(true);
      setSelectedFile(file);

      Papa.parse(file, {
        header: false,
        complete: (results: any) =>
          setContent((previous) => [...previous, results.data]),
      });
    } else {
      setOpenSettings(false);
      setSelectedFile(null);
    }
  };

  useEffect(() => {
    if (content.length > 0) {
      csvformater(content);
    }
  }, [content]);

  const closeSettings = () => {
    setOpenSettings(false);
    setSelectedFile(null);
  };

  return (
    <div className="h-screen bg-yellow flex items-center flex-col">
      <h1 className="">Quizz builder</h1>
      <section>

        {!selectedFile && (
          <div  className={`${
            hovered ? "bg-purple" : "bg-blue"
          } transition ease-in-out delay-100 flex items-center justify-center w-[28rem] h-[12rem] rounded-md`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <label className={`${hovered ? "border-white" : "border-purple"} h-full w-full flex flex-col justify-center items-center text-amber-dk border-2 border-dashed px-2 rounded-md cursor-pointer`} htmlFor="file">
              <div className="flex flex-col items-center">
                <ArrowDown height="120" width="120" hover={hovered} />
                <span className={`${hovered ? "text-white" : "text-purple"} block font-semibold h-full w-full flex items-center justify-center`}>
                  Drop your file here or click to choose a file
                </span>
              </div>
              <input
                className="absolute w-[28rem] h-[12rem] opacity-0 cursor-pointer"
                type="file"
                id="file"
                name="file"
                accept=".csv"
                onChange={handleFile}
              />
            </label>
          </div>
        )}
        {selectedFile && openSettings && (
          <Settings closeSet={closeSettings} data={csvformater(content)} />
        )}
      </section>
    </div>
  );
}

export default App;
