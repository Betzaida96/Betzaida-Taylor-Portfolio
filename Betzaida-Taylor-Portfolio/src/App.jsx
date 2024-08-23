import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './assets/pages/AboutMe';
import Portfolio from './assets/pages/Portfolio';
import Contact from './assets/pages/Contact';
import Resume from './assets/pages/Resume';

function App() {
  return (

      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element = {<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </div>

  )
}

export default App
