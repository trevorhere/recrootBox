import React from "react";
import "../app.css";
import { Link } from 'gatsby';
import { Col } from "react-materialize";
import { accent } from "../ProfileInformation";
import styled from 'styled-components'


const LinkView = (props) => {
  const { title, date, filename } = props;
  const altered_filename = filename.substr(0, filename.length - 3)

  return (
    <PostLink to={`/posts/${altered_filename}/68cc754fb298f3121b5b2b4cfaa754d4`} >
      <div>{title}</div>
      <div className="date">{date}</div>
    </PostLink>
  );
}

export default LinkView;

const PostLink = styled(Link)`
color: ${accent};
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 1rem 0;
padding: .25rem .5rem;

&:hover {
  background-color:${accent}!important;
  color: white;
}
`