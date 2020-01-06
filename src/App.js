import React, {Component} from 'react';

import './App.css';
import Layout from './hoc/Layout/Layout';
import Header from './container/Header/Header';
import About from './container/About/About';
import Technologies from './container/Technologies/Technologies';
import Experience from './container/Experience/Experience';
import Education from './container/Education/Education';
import Contact from './container/Contact/Contact';
import Footer from './container/Footer/Footer';

class App extends Component {

  state = {
    german: false
  }

  toggleLanguage = () => {
    const language = this.state.german;
    this.setState({german: !language})
  }
  render() {
    return (
      <div className="App">
          <Layout german={this.state.german} toggleLanguage={this.toggleLanguage}>
            <Header german={this.state.german}/>
            <About german={this.state.german} />
            <Technologies german={this.state.german}/>
            <Experience german={this.state.german}/>
            <Education german={this.state.german}/>
            <Contact german={this.state.german}/>
            <Footer german={this.state.german} /> 
          </Layout>
         
      </div>
    )
  };
}

export default App;
