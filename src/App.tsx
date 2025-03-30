import React from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Center from './components/Center';
import Creatcontext from './Contextapi/Creatcontext';

const App: React.FC = () => {
  return (
    <Router>
      <Creatcontext>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/center" element={<Center />} /> 
          <Route path="/center/:place" element={<Center />} /> 
        </Routes>
      </Creatcontext>
    </Router>
  );
};

export default App;
