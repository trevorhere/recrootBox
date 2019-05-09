import React, { Component } from "react";
import { Parallax } from "react-scroll-parallax";

import {
  firstName,
  lastName,
  title,
  bio,
  selfie,
  links
} from "../ProfileInformation";
import "../App.css";

class HeaderSection extends Component {
  render() {
    return (
      // <Parallax className="custom-class" y={[-30, 30]} tagOuter="figure">
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
              <a key={index} href={item.link}>
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
      // </Parallax>
    );
  }
}

export default HeaderSection;
