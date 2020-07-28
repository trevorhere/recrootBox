import React from "react";
import "../app.css";
import { Link } from 'gatsby';

import { Row } from "react-materialize";
import { accent } from "../../siteData";
import ReactMarkdown from "react-markdown";
import styled from 'styled-components'
const WORDS_PER_MINUTE = 250;


const buildCard = content => {
  let card = {}
  let splitArr = content.split('\n');
  card["author"] = splitArr[1].split(':')[1]
  card["title"] = splitArr[2].split(':')[1]
  card["date"] = splitArr[3].split(':')[1]
  card["image"] = splitArr[4].split(':')[1] + ':' + splitArr[4].split(':')[2]
  let readTime = Math.ceil(splitArr[7].split(' ').length / WORDS_PER_MINUTE)
  card["readTime"] = readTime;
  console.log('arr: ', splitArr)
  console.log('card: ', card);
  return card;
}

const abbrContent = (content) => {
  console.log('content: ', content)


  let card = {}
  let splitArr = content.split('\n');
  card["author"] = splitArr[1].split(':')[1]
  card["title"] = splitArr[2].split(':')[1]
  card["date"] = splitArr[3].split(':')[1]
  card["image"] = splitArr[4].split(':')[1] + splitArr[4].split(':')[2]

  if (content.split(" ").length < 150) {
    return content;
  }

  let arr = content.split(" ").slice(0, 150);
  arr.push("....");
  return arr.join(" ");
}

const PostView = (props) => {
  const { date, filename, content } = props;
  let card = buildCard(content);
  const altered_filename = filename.substr(0, filename.length - 3)

  return (
    <BlogStub>
        <Row>
          {(card.image && card.title && card.author && card.date )? (
            <div>
                <Author>{card.author}</Author>
                <Date>{card.date}</Date>
                <img src={card.image} alt="test" width="500" />
                <h1>{card.title}</h1>
              </div>
            ) : null
          }
        </Row>
        {content.length > 500 ? (
            <KeepReading to={`/posts/${altered_filename}/68cc754fb298f3121b5b2b4cfaa754d4`} >
              Keep Reading
            </KeepReading>
        ) : null}
    </BlogStub>
  );
}

export default PostView;

const MarkDown = styled(ReactMarkdown)`
font-size: 1.5em;
line-height: 1.6;
letter-spacing: -0.02em;
font-family: 'Tinos';
`

const Author = styled.h1`
  font-size: 16px;
  font-weight: 400;
`

const Date = styled.h1`
  font-size: 16px;
  font-weight: 400;
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
  box-shadow:         3px 3px 5px 6px #ccc;

  @media (max-width: 768px) {
    width: 90%;
  }
`
