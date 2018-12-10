import React, { Component } from 'react';
import './App.css';
import HeaderSection from './components/HeaderSection';
import PortfolioSection from './components/PortfolioSection';
import FooterSection from './components/FooterSection';
import { Card, CardTitle,  Button, Row, Col } from 'react-materialize';


class App extends Component {
  render() {
    return (
      <div>
        <HeaderSection />
        <Row style={{margin: "0"}}>
          <PortfolioSection/>
        </Row>
        <FooterSection/>
      </div>
    );
  }
}

export default App;
