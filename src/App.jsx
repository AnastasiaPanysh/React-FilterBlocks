import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import BasketPage from './Pages/BasketPage/BasketPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<BasketPage />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
