import React from 'react';
import HomePage from './components/HomePage';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <Router>
        <HomePage />
      </Router>
    </div>
  );
};

export default App;
