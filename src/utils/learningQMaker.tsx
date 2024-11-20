type Quiz = Record<string, object>;

interface PatternItem {
  type: "D" | "T";
  word: string;
  answer: object;
}

function learningQMaker(quizz: Quiz, type: "normal" | "spaced"): PatternItem[] {
  const words: string[] = Object.keys(quizz);
  const pattern: PatternItem[] = [];
  const displayedWords: Set<string> = new Set();

  function addDisplayedWord(word: string): void {
    pattern.push({ type: "D", word: word, answer: { ...quizz[word] } });
    displayedWords.add(word);
  }

  function addTestedWord(word: string): void {
    pattern.push({ type: "T", word: word, answer: { ...quizz[word] } });
  }

  if (type === "normal") {
    words.forEach((word) => addDisplayedWord(word));
    words.forEach((word) => addTestedWord(word));
  } else if (type === "spaced") {
    let displayIndex = 0;
    let testIndex = 0;

    while (testIndex < words.length) {
      if (displayIndex < words.length && Math.random() < 0.6) {
        const word = words[displayIndex];
        if (!displayedWords.has(word)) {
          addDisplayedWord(word);
          displayIndex++;
        }
      } else {
        const word = words[testIndex];
        if (displayedWords.has(word)) {
          addTestedWord(word);
          testIndex++;
        }
      }
    }
  }

  return pattern;
}

export default learningQMaker;
