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
import { QuizContext, QuizProvider } from '../contexts/quiz';

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <QuizProvider>
      <div className="quiz">
        {quizState.showResults && (
          <div className="results">
            <div className="congratulations">Congratulations!</div>
            <div className="results-info">
              <div>You have completed the quiz.</div>
              <div>
                You've got {quizState.correctAnswersCount} of &nbsp;
                {quizState.questions.length} right.
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
        {!quizState.showResults && (
          <div>
            <div className="score">
              Question {quizState.currentQuestionIndex + 1}/
              {quizState.questions.length}
            </div>
            <Question />
            {quizState.currentAnswer && (
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
    </QuizProvider>
  );
};

export default Quiz;
