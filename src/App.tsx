import React, { useEffect, useState } from 'react';
import Settings from './Settings';
import Papa from "papaparse";
import './App.css';
import { csvformater } from './utils/csvformater';

function App() {

  const [openSettings, setOpenSettings] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [content, setContent] = useState<Array<string[]>>([]);

  const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null; // Récupère le premier fichier sélectionné
    if (file) {
      setOpenSettings(true);
      setSelectedFile(file)
      
      Papa.parse(file, {
        header: false,
        complete: (results: any) => setContent(previous => [...previous, results.data])
      }
      )
    }
  }

  useEffect(() => {
    if (content.length > 0) {
      csvformater(content);
    }
  }, [content]);

  const closeSettings = () => {
    setOpenSettings(false);
  }


  return (
    <div className="App">
      <h1>Simple Quizz</h1>
      <label htmlFor="file">select a file</label>
      <input
        type="file"
        id="file"
        name="file"
        accept=".csv"
        onChange={handleFile} />
      {selectedFile && openSettings && <Settings closeSet={closeSettings} data={csvformater(content)} />}
    </div>
  );
}

export default App;
