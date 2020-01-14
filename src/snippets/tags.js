import React from "react"
import Box from "../components/box";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from 'gatsby';

function test() {
const data = useStaticQuery(graphql`
    query{
      allMarkdownRemark {
        totalCount
        edges {
          node {
            frontmatter {
              tags
            }
          }
        }

      }
    }
  `);

  let tags = [];
  data.allMarkdownRemark.edges.map((dta) => {
    let tg = dta.node.frontmatter.tags;
    tg.forEach(element => {
      if (tags.includes(element.toLowerCase())) {
        return;
      }
      tags.push(element.toLowerCase());
    });
  });
  return tags;
}

export default () => {
  let dta = test();
  return (
    <Box>
      <header><Link to="/tags">Tags</Link></header>
      <ul aria-labelledby="tags">
        {dta.map(tag_link => (
          <li><a href={`/tags/${tag_link}`}>{tag_link.charAt(0).toUpperCase() + tag_link.slice(1)}</a></li>
        ))}
      </ul>
    </Box>
  )
};