import React from "react";
import "../app.css";
import { Link } from 'gatsby';

import { Row } from "react-materialize";
import { accent } from "../ProfileInformation";
import ReactMarkdown from "react-markdown";

import styled from 'styled-components'


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
    <BlogStub>
        <Row>
          <MarkDown source={abbrContent(content)} />
        </Row>
        {content.length > 500 ? (
            <KeepReading to={`/posts/${altered_filename}/68cc754fb298f3121b5b2b4cfaa754d4`} >
              Keep Reading
            </KeepReading>
        ) : null}
        <hr className="Divider Blue" />
    </BlogStub>
  );
}

export default BlogView;

const MarkDown = styled(ReactMarkdown)`
font-size: 1.5em;
line-height: 1.6;
letter-spacing: -0.02em;
font-family: 'Tinos';
`

const KeepReading = styled(Link)`
  background-color: ${accent};
  padding: 5px 9px;
  color: #fff;

  &:hover {
    background-color:white;
    color: ${accent};
    border: 2px solid ${accent};
  }
`
const BlogStub = styled.article`
  margin-bottom: 5rem;
  width: 50%; 
  margin:0 auto!important;  

  @media (max-width: 768px) {
    width: 90%; 
  }
`
