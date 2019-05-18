import React, { Component } from "react";
import { FaBolt } from "react-icons/fa";
import { Card, CardTitle, Button, Col, Row } from "react-materialize";



import {
  firstName,
  lastName,
  title,
  bio,
  selfie,
  links,
  userIcons
} from "../ProfileInformation";
import "../App.css";




class HeaderSection extends Component {


  render() {

    return (
      <div>
      <div className="HeaderSection">
              
        <div className="HS-Selfie-and-Name">
          <img src={selfie} className="HS-Selfie" alt="selfie" />
          <hr />
          <div className="HS-Name-Title-Block">
            <h1 className="HS-Name">
              {firstName} {lastName}
            </h1>
            <h2 className="HS-Title">{title}</h2>
          </div>
        </div>
        <p className="HS-Bio">{bio}</p>
        <div className="HS-Links">
          {links.map(function(item, index) {
            return (
              <a key={index}  href={item.link}>
                { !userIcons ? item.name : ( item.icon ? <item.icon className="link-icon" /> : <FaBolt className="link-icon"/>   ) }
              </a>
            );
          })}
        </div>
      </div>
      </div>
    );
  }
}

export default HeaderSection;
