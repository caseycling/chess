import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Board from './components/Board/Board';
import LoginPage from './pages/LoginPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Board />} />
          <Route exact path='/login' element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
