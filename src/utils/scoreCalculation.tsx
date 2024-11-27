interface AnswerType {
  kanji: string
  romaji: string
  kana: string
}

interface Score {
  word: string
  answer: AnswerType
  user: string
}

export const scoreCalculation = (score: Score[]) => {
  console.log("score ", score)
  let length: number = score.length;
  const correct_ans = score.filter(
    (s: Score) => s.user === s.answer['kanji'] || s.user === s.answer['kana'] || s.user === s.answer['romaji']
  ).length
  return (correct_ans * 100) / length
};
