import React, { Component } from 'react';
import '../App.css';
import ReactMarkdown from 'react-markdown';
import { Preloader } from "react-materialize";
import { Link } from "react-router-dom"



class Post extends Component {
  constructor(props){
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      post: []
    }
  }

  blog={
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    paddingTop: '10%',
    paddingBottom: '10%',
  }

  homeLink ={
    color:"black",
    textEmphasis: "center",
    position: "absolute",
    top: "30px",
    right: "100px"
  }

  homeLink:hover = {
    
  }

  postLink ={
    color:"black",
    textEmphasis: "center",
    position: "absolute",
    top: "30px",
    right: "30px"
  }

  preLoader={

  }

  post={
    width:'75%',
  }

  translateTitle(title){
    return (title.substr(0,(title.length - 3)).split('_').join(' '))
  }

  componentDidMount(){

    const targetFile = this.props.match.params.file_name
    fetch(`https://api.github.com/gists/68cc754fb298f3121b5b2b4cfaa754d4`)
    .then(response =>  response.json())
    .then(data => {
      let post = {"filename": targetFile, "content": data.files[targetFile].content}
      this.setState({ 
        isLoaded: true, 
        post
      })
    },(error) => {
      this.setState({
        isLoaded: true,
        error
      });
    })  
  }

  render() {
    const { error, isLoaded, post } = this.state;
    if(error){
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded){
      return ( 
      <Preloader style={this.preLoader}  size="small" />
      )
    }  else {
      return (
        <div style={this.blog}>
          <Link style={this.homeLink} to='/'>HOME </Link>
          <Link style={this.postLink} to='/posts'>POSTS </Link>
          <div style={this.post}>
          <h3>{this.translateTitle(post.filename)}</h3>
          <hr/>
          <ReactMarkdown source={post.content} />
        </div>

        {/* <Button right styles={{left:"0px"}} flat><Link to="/blog">Posts</Link></Button> */}

        </div>
      );
    }
  }
}

export default Post;
