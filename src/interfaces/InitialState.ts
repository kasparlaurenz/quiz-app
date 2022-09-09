import React from 'react';
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
  type: any;
  payload: any;
}
