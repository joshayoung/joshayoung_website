import React from "react";
import Box from "../components/box";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";

function Test() {
  const data = useStaticQuery(graphql`
    query {
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
  data.allMarkdownRemark.edges.forEach(dta => {
    let tg = dta.node.frontmatter.tags;
    tg.forEach(element => {
      element = element.toLowerCase();

      if (tags.includes(element)) {
        return;
      }

      tags.push(element);
    });
  });
  return tags;
}

function formatTag(tag) {
  if (tag === "vscode") return "VSCode";
  if (tag === "javascript") return "JavaScript";
  if (tag === "php") return "PHP";
  if (tag === "github") return "GitHub";
  if (tag === "postgresql") return "PostgreSQL";
  if (tag === "csp") return "CSP";
  if (tag === "mvc") return "MVC";

  return tag.charAt(0).toUpperCase() + tag.slice(1);
}

export default () => {
  let dta = Test();
  return (
    <Box>
      <header>
        <Link to="/tags">Tags</Link>
      </header>
      <ul aria-labelledby="tags">
        {dta.map(tag_link => (
          <li key={tag_link}>
            <a href={`/tags/${tag_link}`}>{formatTag(tag_link)}</a>
          </li>
        ))}
      </ul>
    </Box>
  );
};
