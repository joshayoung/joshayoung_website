import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <SEO title="Home" />
    <h1>Home</h1>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit Morbi in sem quis dui</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
  </Layout>
)

export default IndexPage
