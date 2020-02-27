import React from "react";
import "./app.css";
import { FaBolt, FaRegMoon, FaRegSun } from "react-icons/fa";
import { Link } from "gatsby"
import { Switch } from "react-materialize";
import styled from "styled-components";

import {
  firstName,
  lastName,
  title,
  bio,
  selfie,
  links,
  userIcons,
  darkModeSwitch,
  accent,
  blogName,
  renderBlog,
  campRank,
  portfolioItems
} from "./ProfileInformation";
import MyImg from './image'


const darkStyle = {
  color: 'white',
  backgroundColor: 'black',
};



const HeaderSection = (props) => {

  const darkModeStyle = props.darkMode ?
    darkStyle : {};

  return (
    <div className="HeaderSection" style={darkModeStyle}>
      {renderBlog ? <HeaderLink to='/posts'>{blogName}</HeaderLink> : null}
      {darkModeSwitch ? (
        <div className="Switch">
          {props.darkMode ? < FaRegSun onClick={props.onSwitch} /> : <FaRegMoon onClick={props.onSwitch} />  }
        </div>
      ) : <div></div>}
      <TitleBlock className="HS-Selfie-and-Name">
        <SelfieDiv>
          <MyImg src={selfie} />
        </SelfieDiv>

        <NameTitleBlock >
          <h1 className="HS-Name"> {firstName} {lastName}
          </h1>
          <h2 className="HS-Title"> {title} </h2>
        </NameTitleBlock>
      </TitleBlock>
      <p className="HS-Bio" > {bio} </p>
      <div className="HS-Links">
        {links.map(function (item, index) {
          return (
            <a key={index} href={item.link}>
              {!userIcons ? (
                item.name
              ) : item.icon ? (
                <item.icon className="link-icon" />
              ) : (
                    <FaBolt className="link-icon" />
                  )}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default HeaderSection;




const SelfieDiv = styled.div`
  width: 150px;
  margin: 1rem;
`

const TitleBlock = styled.div`
margin-bottom: 1rem;
  
`

const NameTitleBlock = styled.div`
  text-align: left;
  margin: 0 .25rem;
  font-size: 0.75em;
  @media (max-width: 1000px) {
    text-align:center;
  }
`

const HeaderLink = styled(Link)`
  color: ${accent};
  font-family:  Roboto Mono;
  text-emphasis: center;
  position: absolute;
  right: 30px;
  top: 20px;
  `