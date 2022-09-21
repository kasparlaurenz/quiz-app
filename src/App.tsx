import React, { useState } from 'react';
import Login from './components/Home/Login';
import type { FormEvent } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import { QuizProvider } from './contexts/QuizContext';

const App = () => {
  return (
    <QuizProvider>
      <div className=" App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/quiz" element={<Quiz />}></Route>
            <Route path="/quiz/result"></Route>
          </Routes>
        </Router>
      </div>
    </QuizProvider>
  );
};

export default App;
