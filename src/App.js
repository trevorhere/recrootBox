import React, { Component } from "react";
import "./App.css";
import HeaderSection from "./components/HeaderSection";
import PortfolioSection from "./components/PortfolioSection";
import FooterSection from "./components/FooterSection";
import { ParallaxProvider } from "react-scroll-parallax";
import { Card, CardTitle, Button, Row, Col } from "react-materialize";
import { SectionsContainer, Section } from "react-fullpage";

class App extends Component {
  render() {
    return (
      <div>
        <HeaderSection />
        <Row style={{ margin: "0" }}>
          <PortfolioSection />
        </Row>
        <FooterSection />
      </div>
    );
  }
}

export default App;
