import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "./App.css";
import PostList from "./components/PostList";
import Home from "./components/Home"
import Post from "./components/Post"



class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/posts" exact component={PostList} />
        <Route path="/posts/:file_name/:gist_id"  component={Post} />
      </Router>
    );
  }
}

export default App;
