import React from "react"
import {
  Link
} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Link to="/page-2/">Page 2</Link>
    <div className='content'>
      <p>My name is Josh. I am a Web Developer. Here I write about web development and my current tech projects. Check out my Blog to see what I am writing or my Projects to see what I am building.</p>
    </div>
  </Layout>
)

export default ThirdPage
