import React, {Component} from 'react';

import './App.css';
import ToolBar from "./components/Navigation/Toolbar/Toolbar"
import Header from './components/Header/header';
import About from './container/About/About';
import Technologies from './container/Technologies/Technologies';
import Experience from './container/Experience/Experience';
import Education from './container/Education/Education';
import Contact from './components/Contact/ContactForm';

class App extends Component {

  state = {
    german: true
  }

  toggleLanguage = () => {
    const language = this.state.german;
    this.setState({german: !language})
  }
  render() {
    
    return (
      <div className="App">
        <ToolBar german={this.state.german} toggleLanguage={this.toggleLanguage}/>
        <Header german={this.state.german}/>
        <About german={this.state.german} />
        <Technologies german={this.state.german}/>
        <Experience german={this.state.german}/>
        <Education german={this.state.german}/>
        <Contact german={this.state.german}/>
      </div>
    )
  };
}

export default App;
