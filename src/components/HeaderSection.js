import React from "react";
import "../App.css";
import { FaBolt } from "react-icons/fa";
import { Link } from "react-router-dom"
import { Switch } from "react-materialize";

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
  blogName
} from "../ProfileInformation";

const darkStyle = {
  color: 'white',
  backgroundColor: 'black',
};

const headerLink = {
  color: accent,
  fontFamily: "Roboto Mono",
  textEmphasis: "center",
  position: "absolute",
  right: "30px",
  top: "20px"

};

const HeaderSection = (props) => {

  const darkModeStyle = props.darkMode ?
    darkStyle : {};

  return (
    <div className="HeaderSection" style={darkModeStyle}>
      <Link style={headerLink} to='/posts'>{blogName}</Link>
      {darkModeSwitch ? (
        <div className="Switch">
          <Switch onChange={props.onSwitch} offLabel='' onLabel='' />
        </div>
      ) : <div></div>}
      <div className="HS-Selfie-and-Name">
        {props.test}
        <img src={selfie} className="HS-Selfie" alt="selfie" />
        <div className="HS-Name-Title-Block">
          <h1 className="HS-Name"  >
            {firstName} {lastName}
          </h1>
          <h2 className="HS-Title"> {title} </h2>
        </div>
      </div>
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