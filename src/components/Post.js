import React, { useState } from "react";
import "../App.css";
import ReactMarkdown from "react-markdown";
import { Row, Col } from "react-materialize";
import { Link } from "react-router-dom";
import { gistUrl, blogName, accent } from '../ProfileInformation'
import PreLoader from "./PreLoader"

const blog = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "10%",
  paddingBottom: "10%"
};

const content = {
  fontSize: "1.5em",
  lineHeight: "1.6",
  letterSpacing: "-0.02em",
  fontFamily: 'Tinos'
};

const homeLink = {
  color: accent,
  fontFamily: "Roboto Mono",
  textEmphasis: "center",
  position: "absolute",
  right: "100px",
  top: "20px"
};

const headerLink = {
  color: accent,
  fontFamily: "Roboto Mono",
  textEmphasis: "center",
  position: "absolute",
  right: "30px",
  top: "20px"

};

const postStyle = {
  width: "100%"
};

const translateTitleDate = (fileName) => {
  let arr = fileName.split(":");
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
      content: data.files[targetFile].content,
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
  React.useEffect(() => {
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
  const targetFile = props.match.params.file_name;
  const data = useFetch(gistUrl, targetFile);

  if (data.error) {
    return <div>Error: {data.error}</div>;
  } else if (data.isLoading) {
    return <PreLoader />
  } else {
    const { post } = data;
    return (
      <Row>
        <Col s={1} l={4}></Col>
        <Col s={8} l={4}>
          <div style={blog}>
            <Link style={homeLink} to="/">
              home
              </Link>
            <Link style={headerLink} to="/posts">
              {blogName}
            </Link>
            <div style={postStyle}>
              <Row style={content}>
                <ReactMarkdown source={post.content} />
              </Row>
            </div>
          </div>
        </Col>
        <Col s={1} l={4}></Col>
      </Row>
    );
  }
}

export default Post;