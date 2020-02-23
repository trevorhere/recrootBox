import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NotFound>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <a href="/">Home</a>
    </NotFound>
  </Layout>
)

export default NotFoundPage


const NotFound = styled.div`
  color: white;
  background-color:black;
  height:100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  justify-content: center;
  `
