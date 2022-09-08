import React, { useState } from 'react';
import Login from './components/Login';
import type { FormEvent } from 'react';

const App = () => {
  const PASSWORD = '123';
  const [showQuiz, setShowQuiz] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');

  const verifyPassword = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input === PASSWORD) {
      console.log('right password');
      setShowQuiz(true);
    } else {
      console.log('wrong password');
      setShowQuiz(false);
    }
  };

  return (
    <div className="w-screen h-screen bg-slate-200 flex justify-center items-center">
      {showQuiz ? (
        <div>Hello World</div>
      ) : (
        <Login
          input={input}
          setInput={setInput}
          verifyPassword={verifyPassword}
        />
      )}
    </div>
  );
};

export default App;
