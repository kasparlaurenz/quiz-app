import React, { createContext, useReducer } from 'react';
import questions from '../data/questions/chapter1';
import type { FC } from 'react';
import { shuffleAnswers } from '../util/shuffleAnswers';

const initialState = {
  questions,
  currentQuestionIndex: 0,
  currentAnswer: '',
  answers: shuffleAnswers(questions[0]),
  showResults: false,
  correctAnswersCount: 0,
};

export enum QuizActionKind {
  SELECT = 'SELECT_ANSWER',
  NEXT = 'NEXT_QUESTION',
  RESTART = 'RESTART',
}
type StateType = typeof initialState;

type ActionType = {
  type: QuizActionKind;
  payload?: any;
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case QuizActionKind.SELECT: {
      console.log('SELECT');
      const correctAnswersCount =
        action.payload ===
        state.questions[state.currentQuestionIndex].correctAnswer
          ? state.correctAnswersCount + 1
          : state.correctAnswersCount;
      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswersCount,
      };
    }
    case QuizActionKind.NEXT: {
      console.log('NEXT');

      const showResults =
        state.currentQuestionIndex === state.questions.length - 1;
      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      const answers = showResults
        ? []
        : shuffleAnswers(state.questions[currentQuestionIndex]);
      return {
        ...state,
        currentAnswer: '',
        showResults,
        currentQuestionIndex,
        answers,
      };
    }
    case QuizActionKind.RESTART: {
      console.log('Restart');

      return initialState;
    }
    default:
      return state;
  }
};

export const QuizContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

export const QuizProvider: FC<any> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
