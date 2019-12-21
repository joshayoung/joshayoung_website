import React from "react";
import Layout from "../components/layout";
import { useStaticQuery, Link, graphql } from "gatsby";

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <Layout>
      <h1>About</h1>
      <Link to={`/`}>
        <h3>
          Title: {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link to={`/about/`}>
        About
      </Link>
      {children}
    </Layout>
  )
}