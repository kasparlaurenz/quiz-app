// import React from 'react';

// const Question = () => {
//   return (
//     <div className="question-container p-8 gap-8 rounded-3xl flex flex-col items-start justify-center h-400 bg-zinc-400">
//       <h1 className="font-bold">Question Text</h1>
//       <div className="options flex flex-col gap-2 items-start"></div>
//     </div>
//   );
// };

// export default Question;

import Answer from './Answer';
import { useContext } from 'react';
import { QuizContext } from '../contexts/quiz';

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  return (
    <div>
      <div className="question">{currentQuestion.question}</div>
      <div className="answers">
        {quizState.answers.map((answer, index) => (
          <Answer
            answerText={answer}
            currentAnswer={quizState.currentAnswer}
            correctAnswer={currentQuestion.correctAnswer}
            key={index}
            index={index}
            onSelectAnswer={answerText =>
              dispatch({ type: 'SELECT_ANSWER', payload: answerText })
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
