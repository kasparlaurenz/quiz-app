import React, { useState } from 'react';
import Login from './components/Login';
import type { FormEvent } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';

const App = () => {
  return (
    <div className=" App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
          <Route path="/quiz/result"></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
