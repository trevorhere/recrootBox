import React, { Component } from 'react';
import './App.css';
import HeaderSection from './components/HeaderSection';
import PortfolioSection from './components/PortfolioSection';
import {bio, selfie} from './globalVariables.js'


let SelfieUrl = "./assets/selfie.jpeg";          

class App extends Component {
  render() {
    return (
      <div>
        <HeaderSection />
        <PortfolioSection/>
      </div>
    );
  }
}

export default App;
