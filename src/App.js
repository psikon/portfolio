import React, {Component} from 'react';

import './App.css';
import ToolBar from "./components/Navigation/Toolbar/Toolbar"
import Header from './container/Header/Header';
import About from './container/About/About';
import Technologies from './container/Technologies/Technologies';
import Experience from './container/Experience/Experience';
import Education from './container/Education/Education';
import Contact from './container/Contact/Contact';
import Footer from './container/Footer/Footer';

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
        <Footer german={this.props.german} />
      </div>
    )
  };
}

export default App;
