import React from "react";
import { portfolioTitle, portfolioItems, portfolioSectionBackgroundColor } from "../ProfileInformation";
import { Card, CardTitle, Button, Col, Row } from "react-materialize";
import styled from 'styled-components';


const PSListStyles = {
  backgroundColor: portfolioSectionBackgroundColor
}

const PortfolioSection = (props) => {

  let darkModeStyle = props.darkMode ?
    "black white-text" : {};

  return (
    <div className="PortfolioSection" style={PSListStyles} >
      <h1 className="PS-Title">{portfolioTitle}</h1>
      <div style={PSListStyles} className="PS-List">
        <PortfolioRow children={2}>
          {portfolioItems.map((item, index) => {
            return (
                <PortfolioCard
                  className={darkModeStyle}
                >
                  <img src={item.imageUrl}/>
                  <hr />
                <h2>{item.title}</h2>
                  {item.description}
                  <br />
                  <br />
                  <a style={{ color: "white" }} href={item.link}>
                    <PortfolioButton  waves="light">
                      View
                      </PortfolioButton>
                  </a>
                </PortfolioCard>
            );
          })}
        </PortfolioRow>
      </div>
    </div>
  );
}


export default PortfolioSection;


const PortfolioRow =  styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding-bottom: 3rem;
`

const PortfolioButton = styled.button `
  background-color: #1A202D;
  padding: .25rem 1rem;  
  border-radius: 4px;
  color: white;
  &:hover {
    background-color:transparent;
    color: black;
    border: 2px solid black
  }
`

const PortfolioCard =  styled.div`
  display: inline-block;
  margin: 0 1em;
  width: calc(33% - 2em);
  background: white;
  padding: 1rem;
  margin: 1rem;
  border-radius: 4px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
`