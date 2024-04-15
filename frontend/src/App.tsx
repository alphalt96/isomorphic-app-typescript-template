import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/login' element={<LoginPage/>} />
    </Routes>
  );
}

export default App;
