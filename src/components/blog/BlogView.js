import React from "react";
import "../app.css";
import { Link } from 'gatsby';

import { Row, Col } from "react-materialize";
import { accent } from "../ProfileInformation";
import ReactMarkdown from "react-markdown";

const contentStyle = {
  fontSize: "1.5em",
  lineHeight: "1.6",
  letterSpacing: "-0.02em",
  fontFamily: 'Tinos'
};

const keepReadingLink = {
  backgroundColor: accent,
  padding: "5px 9px ",
  color: "#fff",
}

const abbrContent = (content) => {
  if (content.split(" ").length < 150) {
    return content;
  }
  let arr = content.split(" ").slice(0, 150);
  arr.push("....");
  return arr.join(" ");
}

const BlogView = (props) => {
  const { date, filename, content } = props;
  const altered_filename = filename.substr(0, filename.length - 3)

  return (
    <article>
      <Col s={0} l={3}></Col>
      <Col s={12} l={6}>
        <Row>
          <span>{date}</span>
        </Row>
        <Row style={contentStyle}>
          <ReactMarkdown source={abbrContent(content)} />
        </Row>
        {content.length > 500 ? (
          <div className="keepReadingLink">
            <Link style={keepReadingLink} to={`/posts/${altered_filename}/68cc754fb298f3121b5b2b4cfaa754d4`} >
              Keep Reading
                </Link>
          </div>
        ) : null}
        <hr className="Divider Blue" />

      </Col>
      <Col s={0} l={3}></Col>
    </article>
  );
}

export default BlogView;