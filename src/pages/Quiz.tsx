// import React, { useEffect } from 'react';
// import Question from '../components/Quiz/Question';

import { useContext } from 'react';
import { QuizActionKind, QuizContext } from '../contexts/QuizContext';

// const Quiz = () => {
//   return (
//     <div className="quiz w-screen h-screen bg-slate-200 flex flex-col justify-center items-center">
//       <h1 className="font-bold text-3xl mb-4">Quiz</h1>
//       <Question />
//     </div>
//   );
// };

// export default Quiz;

const Quiz = () => {
  const { state, dispatch } = useContext(QuizContext);
  return (
    <div className="quiz flex justify-center items-center h-screen">
      <button
        className="p-2 bg-slate-400 rounded-sm hover:bg-slate-300"
        onClick={() => dispatch({ type: QuizActionKind.SELECT })}
      >
        Test
      </button>
    </div>
  );
};

export default Quiz;
