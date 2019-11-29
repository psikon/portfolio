import React from 'react';

import './App.css';
import ToolBar from "./components/Navigation/Toolbar/Toolbar"
import Header from './components/Header/header';
import AboutMe from './components/About/Aboutme';
import Experience from './container/Experience/Experience';
import Education from './container/Education/Education';
import Contact from './components/Contact/ContactForm';

function App() {
  return (
    <div className="App">
      <ToolBar />
      <Header />
      <AboutMe />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
