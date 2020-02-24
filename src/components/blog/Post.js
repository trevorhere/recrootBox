import React, { useState, useEffect } from "react";
import "../app.css";
import { Row, Col } from "react-materialize";
import { Link } from "gatsby";
import { gistUrl, blogName, accent } from '../ProfileInformation'
import PreLoader from "../PreLoader"
import ReactMarkdown from "react-markdown";
import './blog.css'
import styled from 'styled-components';



const translateTitleDate = (fileName) => {
  let arr = fileName.split("__");
  let title = arr[0].split("_").join(" ");
  let date = arr[1]
    .substr(0, arr[1].length - 3)
    .split("_")
    .join("/");

  return { title: title, date: date };
}

const handleFetchResponse = (data, targetFile) => {
  if (data) {
    let post = {
      filename: targetFile,
      content: data.files[`${targetFile}.md`].content,
      title: translateTitleDate(targetFile).title,
      date: translateTitleDate(targetFile).date
    }
    return post;
  }
}

const useFetch = (url, targetFile) => {

  const [response, setResponse] = useState(null);
  const [post, setPost] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();

        setResponse(json);
        setPost(handleFetchResponse(json, targetFile))
        setIsLoading(false)
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);


  return { post, response, error, isLoading };

};


const Post = props => {

  const targetFile =  props.file_name;

  const data =  useFetch(gistUrl, targetFile);
  console.log('data: ', data);
  console.log('title: ', data.post.title); 

  if (data.error) {
    return <div>Error: {data.error}</div>;
  } else if (data.isLoading) {
    return <PreLoader />
  } else {
    console.log('data: ', data);
    const { post } = data;
    return (
      <div>
        <HeaderRow>
          <HeaderLink to="/posts">
            {blogName}
          </HeaderLink>
          <HomeLink  to="/">
            home
          </HomeLink>
        </HeaderRow>
        <Blog >
          <Content>
            <ReactMarkdown className="markdown" source={post?.content} />
          </Content>
        </Blog>
      </div>
    );
  }
}

export default Post;


const Blog =  styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10%;
  padding-bottom: 10%;
`

const Content  =  styled.div`
  font-size:1.25rem;
  line-height: 1.6;
  letter-spacing: -0.02em;
  font-family: Tinos;
  width: 50%; 
  margin:0 auto!important;  

  @media (max-width: 768px) {
    width: 90%; 
  }
`
const HeaderRow = styled.div`
  top: 0;
  min-height: 100px;
  background-color: ${accent};
  display: flex;
  justify-content: center;
;
`


const HomeLink =  styled(Link)`
  color: white;
  font-family: Roboto Mono;
  text-emphasis: center;
  position: absolute;
  right: 100px;
  top: 20px;
`


const HeaderLink =  styled(Link)`
  background-color: rgb(0, 51, 68); 
  color: rgb(255, 255, 255); 
  padding: 20px; 
  font-family: "Roboto Mono";
  text-align: center; 
  margin: 0px auto;
`

