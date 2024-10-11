export const scoreCalculation = (score: Array<object>) => {
  let length: number = score.length;
  let correct_ans: number = score.filter(
    ({ correct }: any) => correct === true
  ).length;
  return (correct_ans * 100) / length;
};
