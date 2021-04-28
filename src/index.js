import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { QuizContextProvider } from './contexts/QuizContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import App from './App';

ReactDOM.render(
  <QuizContextProvider>
    <Router>
      <App />
    </Router>
  </QuizContextProvider>,
  document.getElementById('root')
);
