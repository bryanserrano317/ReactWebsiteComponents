import './App.css';
import Navbar from './components/js/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './components/Pages/Home';
import NotFound from './components/js/NotFound';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/page1' element={<Home/>} /> 
          <Route path='/page2' element={<Home/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
