import React, { useEffect, useState } from "react";
import Settings from "./Settings";
import Papa from "papaparse";
import "./App.css";
import { csvformater } from "./utils/csvformater";

function App() {
  const [openSettings, setOpenSettings] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [content, setContent] = useState<Array<string[]>>([]);

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
    <div className="h-screen bg-amber flex items-center flex-col">
      <h1 className="">Quizz builder</h1>
      {!selectedFile && (
        <div className=" bg-test flex items-center justify-center w-1/2 h-[32rem]">
          <label className="h-3/4 w-full flex flex-col justify-center items-center text-amber-dk min-w-[322px] max-w-[508px] h-12 border-2 border-dashed border-amber-md px-4 py-2 rounded-md cursor-pointer" htmlFor="file">
            select a file
            <input
              className="block w-full text-sm text-amber-dk
                        
                        file:text-sm file:font-semibold
                        file:w-full file:h-full
                        file:bg-amber file:text-amber-dk"
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
    </div>
  );
}

export default App;
