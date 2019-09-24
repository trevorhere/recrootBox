import React, { Component } from 'react';
import '../App.css';
import { Preloader } from "react-materialize";
import { Link } from "react-router-dom"



<<<<<<< HEAD:src/components/PostList.js
class PostList extends Component {
  constructor(props){
=======
class Blog extends Component {
  constructor(props) {
>>>>>>> fd42e7fc5754f9652fd9b497c32bbb8393f3b9c8:src/components/Blog.js
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

<<<<<<< HEAD:src/components/PostList.js
  headerLink ={
    backgroundColor: "#fff",
    textEmphasis: "center",
    position: "absolute",
    top: "30px",
    right: "30px"
  }


  translateTitle(title){
    return (title.substr(0,(title.length - 3)).split('_').join(' '))
=======
  translateTitle(title) {
    return (title.substr(0, (title.length - 3)).split('_').join(' '))
>>>>>>> fd42e7fc5754f9652fd9b497c32bbb8393f3b9c8:src/components/Blog.js
  }

  componentDidMount() {
    fetch(`https://api.github.com/gists/68cc754fb298f3121b5b2b4cfaa754d4`)
<<<<<<< HEAD:src/components/PostList.js
    .then(response =>  response.json())
    .then(data => {
      let files = []
      const fileNames = Object.keys(data.files);
      for (let i = 0; i < fileNames.length; i++) {
        var fileName = fileNames[i];
        let content = data.files[fileName].content
    
        files.push({"filename":`${fileName}`, "content":`${content}`});
      }
      this.setState({ 
        isLoaded: true, 
        files
=======
      .then(response => response.json())
      .then(data => {
        let files = []
        // Loop through files
        const fileNames = Object.keys(data.files);
        for (let i = 0; i < fileNames.length; i++) {
          var fileName = fileNames[i];
          let content = data.files[fileName].content

          files.push({ "filename": `${fileName}`, "content": `${content}` });
        }
        this.setState({
          isLoaded: true,
          files
        })
      }, (error) => {
        this.setState({
          isLoaded: true,
          error
        });
>>>>>>> fd42e7fc5754f9652fd9b497c32bbb8393f3b9c8:src/components/Blog.js
      })
  }

  render() {
    const { error, isLoaded, files } = this.state;
    console.log('files_state: ', files)
    if (error) {
      return <div>Error: {error.message}</div>;
<<<<<<< HEAD:src/components/PostList.js
    } else if (!isLoaded){
      return <Preloader style={this.preLoader}  size="small" />
    } else {
      return (
        <div style={this.blog}>
        <div style={this.posts} >
          <Link  style={this.headerLink} to='/'>HOME </Link>
=======
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div style={this.blog}>
          <div style={this.posts} className="Blog">
>>>>>>> fd42e7fc5754f9652fd9b497c32bbb8393f3b9c8:src/components/Blog.js
            <h3>Posts</h3>
            {files.map(item => {
              return (
                <div style={this.postLink}>
<<<<<<< HEAD:src/components/PostList.js
                  <hr className="Divider Grey"/>
                  <div  className="PostLink"><b><a  href={`/posts/${item.filename}/68cc754fb298f3121b5b2b4cfaa754d4`} >{this.translateTitle(item.filename)}</a></b></div>
=======
                  <hr className="Divider Grey" />
                  <div key={item.fileName} className="PostLink"><b><a href={`/blog/${item.filename}/68cc754fb298f3121b5b2b4cfaa754d4`} >{this.translateTitle(item.filename)}</a></b></div>
>>>>>>> fd42e7fc5754f9652fd9b497c32bbb8393f3b9c8:src/components/Blog.js
                </div>
              )
            })
            }
          </div>
        </div>
      );
    }
  }
}

export default PostList;
