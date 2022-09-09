import { stat } from 'fs';
import React, { createContext, useReducer } from 'react';
import questions from '../data/questions';
import { IInitialState, IQuizAction } from '../interfaces/InitialState';
import { shuffleAnswers } from '../util/shuffleAnswers';

const initialState = {
  questions,
  currentQuestionIndex: 0,
  currentAnswer: '',
  answers: shuffleAnswers(questions[0]),
  showResults: false,
  correctAnswersCount: 0,
};

const reducer = (state: IInitialState, action: IQuizAction): IInitialState => {
  return state;
};

export const QuizContext = createContext<{
  state: IInitialState;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

export const QuizProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
