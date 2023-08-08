import React from 'react';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import ScrollToTop from './Components/ScrollToTop';


import Projects from './Components/Projects';
import Contact from './Components/Contact';
import "./App.css"
import SkillsAndStatistics from './Components/Skills';
import Githubstats from './Components/Statistics';

const App = () => {
  return (
    <div className='App'>
      <ScrollToTop />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <SkillsAndStatistics />
      <Githubstats />
      <Contact />
    </div>
  );
};

export default App;
