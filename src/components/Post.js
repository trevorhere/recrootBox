import React, { Component } from 'react';
import '../App.css';
import ReactMarkdown from 'react-markdown';
import { Card, CardTitle, CardPanel, Button, Row, Col } from "react-materialize";
import { Link } from "react-router-dom"



class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      post: []
    }
  }

  page = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '10%'
  }

  posts = {
    width: '100%',
  }

  translatePostsData(targetFile, content) {
    let contentObj = JSON.parse(content.substr(1, content.length - 2))
    contentObj.filename = targetFile
    console.log('co', contentObj)
    return contentObj;
  }

  componentDidMount() {
    const targetFile = this.props.match.params.file_name
    fetch(`https://api.github.com/gists/68cc754fb298f3121b5b2b4cfaa754d4`)
      .then(response => response.json())
      .then(data => {
        let post = this.translatePostsData(targetFile, data.files[targetFile].content)

        this.setState({
          isLoaded: true,
          post
        })
      }, (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      })
  }

  render() {
    const { error, isLoaded, post } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div style={this.page}>
          <div style={this.post}>
            <h4>{post.title}</h4>
            <hr />
            <ReactMarkdown source={post.content} />
          </div>
        </div>
      );
    }
  }
}
export default Post;
