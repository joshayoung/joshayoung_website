import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { css } from "@emotion/core";

export default function Template({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout klass="markdown">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <div
        css={css`
          font-size: 12px;
          margin-top: 20px;
        `}
      >
        Last Updated: {frontmatter.date}
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
