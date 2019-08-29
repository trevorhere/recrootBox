import React, { Component } from 'react';
import HeaderSection from "./HeaderSection";
import PortfolioSection from "./PortfolioSection";
import FooterSection from "./FooterSection";
import { darkMode } from "../ProfileInformation";
import { Card, CardTitle, Button, Row, Col } from "react-materialize";

import '../App.css';


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      darkMode
    }
  }

  darkModeSwitch = () => this.setState({ darkMode: !this.state.darkMode })

  
  render() {
      return (
        <div className="HomeSection">
          <HeaderSection
          darkMode={this.state.darkMode}
          onSwitch={this.darkModeSwitch}
        />
        <Row style={{ margin: "0" }}>
          <PortfolioSection darkMode={this.state.darkMode} />
        </Row>
        <FooterSection />
        </div>
      );
  }
}

export default Home;
