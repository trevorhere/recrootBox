import React from "react";
import "../app.css";
import { Link } from 'gatsby';
import { Col } from "react-materialize";
import { accent } from "../ProfileInformation";

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
  const { title, date, filename } = props;
  const altered_filename = filename.substr(0, filename.length - 3)

  return (
    <article>
      <Col s={0} l={3}></Col>
      <Col s={12} l={6}>
        <div className="keepReadingLink" style={contentStyle}>

          <Link style={keepReadingLink} to={`/posts/${altered_filename}/68cc754fb298f3121b5b2b4cfaa754d4`} >
            <Col s={6}>
              <span>{title}</span>
            </Col>
            <Col style={{ textAlign: "right" }} s={6}>
              <span className="date">{date}</span>
            </Col>
          </Link>
          <hr className="Divider Blue" />
        </div>
      </Col>
      <Col s={0} l={3}></Col>
    </article>
  );
}

export default LinkView;