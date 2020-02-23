import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"

import PostsSection from "../components/blog/PostsSection";
import Post from "../components/blog/Post"



const App = () => {
  return (
    <Layout>
      <Router>
        <PostsSection path="/posts" exact component={PostsSection} />
        <Post path="/posts/:file_name/:gist_id" component={Post} />
      </Router>
    </Layout>
  )
}
export default App