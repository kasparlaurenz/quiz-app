import { IQuestion } from '../interfaces/Question';

export const shuffleAnswers = (question: IQuestion) => {
  if (!question) {
    return [];
  }
  const unshuffledAnswers = [
    question.correctAnswer,
    ...question.incorrectAnswers,
  ];
  return unshuffledAnswers
    .map(a => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value);
};
