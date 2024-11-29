export const foundWord = (
    word: string,
    words: Array<{ word: string; translation: string }>
  ): string  => {
    const w = words.find((w) => w.word === word);
    if (w) return w.translation;
    return "";
  };