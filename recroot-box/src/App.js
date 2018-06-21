import React, { Component } from 'react';
import './App.css';
import HeaderSection from './components/HeaderSection';
import PortfolioSection from './components/PortfolioSection';
import RecrootBoxSection from './components/RecrootBoxSection';


let Bio = "Hey, I'm a computer science student at Brigham Young University." + 
          " I like to build web applications with web technologies like ES6," +
          " Node.js, and MongoDB. Feel free to take a look at some things i've " +
          " built here or checkout my code on github.";

let SelfieUrl = "./assets/selfie.jpeg";          

class App extends Component {
  render() {
    return (
      <div>
        <HeaderSection Bio = {Bio} SelfieUrl = {SelfieUrl} />
        <PortfolioSection/>
        <RecrootBoxSection/>
      </div>
    );
  }
}

export default App;
