import React, { Component } from 'react';
import './App.css';
import HeaderSection from './components/HeaderSection';
import PortfolioSection from './components/PortfolioSection'; 
import FooterSection from './components/FooterSection';    

class App extends Component {
  render() {
    return (
      <div>
        <HeaderSection />
        <PortfolioSection/>
        <FooterSection/>
      </div>
    );
  }
}

export default App;
