import React, {Component} from 'react';

import './App.css';
import ToolBar from "./components/Navigation/Toolbar/Toolbar"
import Header from './components/Header/header';
import AboutMe from './components/About/Aboutme';
import Experience from './container/Experience/Experience';
import Education from './container/Education/Education';
import Contact from './components/Contact/ContactForm';

class App extends Component () {

  state = {
    german: true
  }

  toggleLanguage() {
    const language = !this.state.german;
    this.setState({german: language})
  }
  render() {
    console.log(this.state.german)
    return (
      <div className="App">
        <ToolBar german={this.state.german} toggleLanguage={this.toggleLanguage}/>
        <Header />
        <AboutMe />
        <Experience />
        <Education />
        <Contact />
      </div>
    )
  };
}

export default App;
