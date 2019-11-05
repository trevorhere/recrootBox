import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./App.css";
import Home from "./components/Home"

import PostsSection from "./components/blog/PostsSection";
import Post from "./components/blog/Post"



class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/posts" exact component={PostsSection} />
        <Route path="/posts/:file_name/:gist_id" component={Post} />
      </Router>
    );
  }
}

export default App;
