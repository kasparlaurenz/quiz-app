import React from 'react';
import { QuizActionKind } from '../enums/QuizActionKind';
import { IQuestion } from './Question';

export interface IInitialState {
  questions: Array<IQuestion>;
  currentQuestionIndex: number;
  currentAnswer: string;
  answers: string[];
  showResults: boolean;
  correctAnswersCount: number;
}

export interface IQuizState {
  state: IInitialState;
}

export interface IQuizAction {
  type: QuizActionKind;
  payload: string;
}

export interface IContext {
  state: IInitialState;
  dispatch: React.Dispatch<IQuizAction>;
}
