import React, { createContext, useReducer } from 'react';
import questions from '../data/questions';
import { QuizActionKind } from '../enums/QuizActionKind';
import {
  IContext,
  IInitialState,
  IQuizAction,
} from '../interfaces/InitialState';
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
  switch (action.type) {
    case QuizActionKind.SELECT: {
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
      return initialState;
    }
    default:
      return state;
  }
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
