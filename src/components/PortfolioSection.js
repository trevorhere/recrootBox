import React, {useState, useEffect} from "react";
import {
  portfolioTitle,
  portfolioItems,
  portfolioSectionBackgroundColor
} from "../siteData";
import styled from 'styled-components';
import MyImg from './image'
import './app.css'


const PSListStyles = {
  backgroundColor: portfolioSectionBackgroundColor
}

const PortfolioSection = (props) => {

  const [darkMode, setDarkMode] = useState(null);

  useEffect(() => {
    setDarkMode(props.darkMode)
  })

  let darkModeStyle = darkMode ?
    {backgroundColor: `black`, color: `white`} : {};

  return (
    <div className="PortfolioSection" style={PSListStyles} >
      <h1 className="PS-Title">{portfolioTitle}</h1>
        <PortfolioRow >
          {portfolioItems.map((item, i) => {
            return (
                <PortfolioCard
                  key={i}
                  style={ darkMode ? {background: `black`, color: `white`} : {}}
                >
                  <MyImg src={item.imageUrl} />
                  <hr />
                <h2>{item.title}</h2>
                  {item.description}
                  <br />
                  <br />
                  <a style={{ color: "white" }} href={item.link}>
                    <PortfolioButton >
                      View
                      </PortfolioButton>
                  </a>
                </PortfolioCard>
            );
          })}
        </PortfolioRow>
    </div>
  );
}


export default PortfolioSection;


const PortfolioRow =  styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding-bottom: 3rem;
  justify-content: center;
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

  margin: 0 1em;
  width: calc(33% - 2em);
  background: white;
  padding: 1rem;
  margin: 1rem;
  border-radius: 4px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  @media (max-width: 768px) {
    width: 90%;
    margin: 1rem 0;
  }
`