import React, { Component } from 'react';
import '../App.css';
import ReactMarkdown from 'react-markdown';

class Blog extends Component {
  constructor(props){
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      files: []
    }
  }

  componentDidMount(){
    fetch(`https://api.github.com/gists/68cc754fb298f3121b5b2b4cfaa754d4`)
    .then(response =>  response.json())
    .then(data => {
      let files = []
      // Loop through files
      const fileNames = Object.keys(data.files);
      for (let i = 0; i < fileNames.length; i++) {
        var fileName = fileNames[i];
        let content = data.files[fileName].content
    
        files.push(`${content}`);
      }
      this.setState({ 
        isLoaded: true, 
        files
      })
    },(error) => {
      this.setState({
        isLoaded: true,
        error
      });
    })  
  }

  renderPosts = ({files}) => {


    let i;
    for( i = 0; i < files.length; i++){
      console.log('length', files.length)
      console.log('i: ', i)
      console.log('filename: ', files[i].filename)
      return (<div key={i}>{files[i].filename}: {files[i].content}</div>)
    }	
    // for(let i = 0; i < files.length; i++){
    //   console.log('length', files.length)
    //   console.log('i: ', i)
    //   console.log('filename: ', files[i].filename)
    //   return (<div>{files[i].filename}: {files[i].content}</div>)
    // }
  }

  render() {
    const { error, isLoaded, files } = this.state;
    console.log('files_state: ', files)
    if(error){
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded){
      return <div>Loading...</div>;
    } else {
      return (
        <div className="BlogSection">
          <h1>.</h1>
          {files.map(item => {return <ReactMarkdown source={item} />})}
        </div>
      );
    }
  }
}

export default Blog;
