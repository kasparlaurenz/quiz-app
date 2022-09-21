// import React, { useEffect } from 'react';
// import Question from '../components/Quiz/Question';

// const Quiz = () => {
//   return (
//     <div className="quiz w-screen h-screen bg-slate-200 flex flex-col justify-center items-center">
//       <h1 className="font-bold text-3xl mb-4">Quiz</h1>
//       <Question />
//     </div>
//   );
// };

// export default Quiz;

import { useContext } from 'react';
import Question from '../components/Quiz/Question';
import { QuizContext } from '../contexts/QuizContext';

const Quiz = () => {
  const { state, dispatch } = useContext(QuizContext);

  return (
    <div className="quiz">
      {state.showResults && (
        <div className="results">
          <div className="congratulations">Congratulations!</div>
          <div className="results-info">
            <div>You have completed the quiz.</div>
            <div>
              You've got {state.correctAnswersCount} of &nbsp;
              {state.questions.length} right.
            </div>
          </div>
          <div
            onClick={() => dispatch({ type: 'RESTART' })}
            className="next-button"
          >
            Restart
          </div>
        </div>
      )}
      {!state.showResults && (
        <div>
          <div className="score">
            Question {state.currentQuestionIndex + 1}/{state.questions.length}
          </div>
          <Question />
          {state.currentAnswer && (
            <div
              onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
              className="next-button"
            >
              Next question
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
