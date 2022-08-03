import React from 'react'
import Main from './components/Main';
import './components/style.css';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Main />
    </Router>

  );
}

export default App