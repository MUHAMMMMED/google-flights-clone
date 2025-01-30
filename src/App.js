import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/Home/Home';
 
function App() {
  return (
    <Router>
      <Header/>
      <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

      </div>
    </Router>
  );
}

export default App;