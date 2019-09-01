import React, { Component } from 'react';
import '../App.css';
import ReactMarkdown from 'react-markdown';
import { Card, CardTitle, CardPanel, Button, Row, Col } from "react-materialize";
import { Link } from "react-router-dom"
import Post from "./Post"




class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      files: []
    }
  }

  postLink = {
    width: '100%',
    margin: '0 auto'

  }

  blog = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '10%'
  }
  posts = {
    width: '75%',
  }

  renderPost(title, content, date, filename) {
    this.props.history.push({
      pathname: `/blog/${filename}/68cc754fb298f3121b5b2b4cfaa754d4`,
      state: {
        title,
        content,
        date
      }
    })
  }

  translateTitle(title) {
    return (title.substr(0, (title.length - 3)).split('_').join(' '))
  }

  translatePostsData(data) {
    let posts = []
    const fileNames = Object.keys(data);
    for (let i = 0; i < fileNames.length; i++) {
      var fileName = fileNames[i];
      let content = data[fileName].content

      let contentObj = JSON.parse(content.substr(1, content.length - 2))
      contentObj.filename = fileName
      posts.push(contentObj);
    }
    return posts;
  }

  componentDidMount() {
    fetch(`https://api.github.com/gists/68cc754fb298f3121b5b2b4cfaa754d4`)
      .then(response => response.json())
      .then(data => {
        let files = this.translatePostsData(data.files)
        this.setState({
          isLoaded: true,
          files
        })
      }, (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      })
  }

  render() {
    const { error, isLoaded, files } = this.state;
    console.log('files_state: ', files)
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div style={this.blog}>
          <div style={this.posts} className="Blog">
            <h3>Posts</h3>
            {files.map(item => {
              const { title, content, date, filename } = item;
              return (
                <Row
                  style={this.postLink}
                  onClick={() => this.renderPost(title, content, date, filename)}
                >
                  <hr className="Divider Grey" />
                  <Col s={6}>
                    {item.title}
                  </Col>
                  <Col className="right-align" s={6}>
                    {item.date}
                  </Col>
                </Row>
              )
            })
            }
          </div>
        </div>
      );
    }
  }
}

export default Blog;
