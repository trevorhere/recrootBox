import React, { useState } from 'react';
import HeaderSection from "./HeaderSection";
import PortfolioSection from "./PortfolioSection";
import EmailCaptureSection from "./EmailCaptureSection";
import FooterSection from "./FooterSection";
import { darkMode } from "./../siteData";
import { Row } from "react-materialize";

import './app.css';

const Home = () => {
  const [darkModeProp, setDarkModeProp] = useState(darkMode)
  const darkModePropToggler = () => {
    setDarkModeProp(!darkModeProp)
  }

  return (
    <div className="HomeSection">
      <HeaderSection
        darkMode={darkModeProp}
        onSwitch={darkModePropToggler}
      />
      <Row style={{ margin: "0" }}>
        <PortfolioSection darkMode={darkModeProp} />
      </Row>
      <EmailCaptureSection />
      <FooterSection />
    </div>
  );
}

export default Home;