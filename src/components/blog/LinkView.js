import React from "react";
import "../../App.css";

import { Col } from "react-materialize";
import { accent } from "../../ProfileInformation";

const contentStyle = {
  width: "100%",
  fontSize: "100%",
  letterSpacing: "-0.02em"
};

const keepReadingLink = {
  color: accent,
  display: "flex",
  flexDirection: "row"
}

const LinkView = (props) => {
  const { title, date, filename, content } = props;

  return (
    <article>
      <Col s={0} l={3}></Col>
      <Col s={12} l={6}>
        <div className="keepReadingLink" style={contentStyle}>

          <a style={keepReadingLink} href={`/posts/${filename}/68cc754fb298f3121b5b2b4cfaa754d4`}>
            <Col s={6}>
              <span>{title}</span>
            </Col>
            <Col style={{ textAlign: "right" }} s={6}>
              <span className="date">{date}</span>
            </Col>
          </a>
          <hr className="Divider Blue" />
        </div>
      </Col>
      <Col s={0} l={3}></Col>
    </article>
  );
}

export default LinkView;