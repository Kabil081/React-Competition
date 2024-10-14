import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Certification from './components/Certification';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Projects from './components/Projects';
import MainPage from './components/MainPage';
const App = () => {
  return(
      <Routes>
        <Route path="/" element={<Certification/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/projects" element={<Projects />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/certifications" element={<Certification/>}/>
      </Routes>
  );
};
export default App;
