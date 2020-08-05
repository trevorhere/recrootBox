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
  card["content"] = splitArr.slice(7, splitArr.length - 1).join("\n");
  console.log('len: ', card["content"].split(' ').length)
  let readTime = Math.ceil(card["content"].split(' ').length / WORDS_PER_MINUTE)
  card["readTime"] = readTime;
  console.log('card: ', card);

  return card;
}

const abbrContent = (content) => {


console.log('content: ', content)
  if (content.split(" ").length < 30) {
    return content;
  }

  let arr = content.split(" ").slice(0, 30);
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
                <div style={{display: "flex"}} >
                  <Date>{card.date}  </Date>
                  <ReadTime>   ·  {card.readTime} min read</ReadTime>
                </div>
                <Link to={`/posts/${altered_filename}/68cc754fb298f3121b5b2b4cfaa754d4`} >
                <div style={{width: '100%', height: '200px', overflow: 'hidden'}}>
                  <img style={{width: '100%'}} src={card.image} alt="test"  />s
                </div>
                </Link>
                <PostLink to={`/posts/${altered_filename}/68cc754fb298f3121b5b2b4cfaa754d4`} >
                <Title>{card.title}</Title>
                </PostLink>
                <ReactMarkdown className="markdown" source={abbrContent(card.content)} />
              </div>
            ) : null
          }
        </Row>
        {/* {content.length > 500 ? (
            <KeepReading to={`/posts/${altered_filename}/68cc754fb298f3121b5b2b4cfaa754d4`} >
              Keep Reading
            </KeepReading>
        ) : null} */}
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
  margin-bottom: 5px;
  color: black;
`
const Title = styled.h1`
  font-size: 34px;
  margin: 15px 0;
`


const Preview = styled.p`
  font-size: 34px;
  margin: 15px 0;
`


const Date = styled.h1`
  font-size: 16px;
  font-weight: 400;
  color: #757575;
`

const ReadTime = styled.h1`
  font-size: 16px;
  font-weight: 400;
  color: #757575;
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
const BlogStub = styled.div`
  display: flex;
  margin-bottom: 5rem;
  width: 50%;
  margin:0 auto!important;
  box-shadow: 2px 2px 2px 2px #ccc;
  border-radius:5px;
  padding: 15px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    width: 90%;
  }
`

const PostLink = styled(Link)`
color: ${accent};
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 1rem 0;
padding: .25rem .5rem;
text-decoration: none;

&:hover {
  text-decoration: underline;
}
`
