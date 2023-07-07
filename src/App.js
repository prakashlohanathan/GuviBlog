import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import FullStackDeloveper from './Components/FullstackDeloveper';
import DataScience from './Components/DataScience';
import CyberSecurity from './Components/CyberSecurity';
import NavBar from './Components/NavBar';
import Career from './Components/Career';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FullstackDeveloper" element={<FullStackDeloveper />} />
          <Route path="/DataScience" element={<DataScience />} />
          <Route path="/CyberSecurity" element={<CyberSecurity />} />
          <Route path="/Career" element={<Career />} />
        </Routes>
    </>
  );
}

export default App;
