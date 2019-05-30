import React, { Component } from "react";
import "./App.css";
import { darkMode } from "./ProfileInformation";
import HeaderSection from "./components/HeaderSection";
import PortfolioSection from "./components/PortfolioSection";
import FooterSection from "./components/FooterSection";
import { Card, CardTitle, Button, Row, Col } from "react-materialize";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      darkMode
    }
  }

  darkModeSwitch = () => this.setState({ darkMode: !this.state.darkMode })

  render() {
    return (
      <div>
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

export default App;
