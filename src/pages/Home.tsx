import React, { useState } from 'react';
import Login from '../components/Home/Login';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const PASSWORD = '123';
  const [input, setInput] = useState<string>('');
  const [showErrMessage, setShowErrMessage] = useState<boolean>(false);
  const navigateTo = useNavigate();

  const verifyPassword = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input === PASSWORD) {
      console.log('right password');
      navigateTo('/quiz');
    } else {
      setShowErrMessage(true);
    }
  };
  return (
    <div className="w-screen h-screen bg-slate-200 flex justify-center items-center">
      <Login
        input={input}
        setInput={setInput}
        verifyPassword={verifyPassword}
        showErrMessage={showErrMessage}
        setShowErrMessage={setShowErrMessage}
      />
    </div>
  );
};

export default Home;
