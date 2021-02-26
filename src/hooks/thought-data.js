import { graphql, useStaticQuery } from "gatsby";

const ThoughtData = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(sort: { order: DESC, fields: frontmatter___date }) {
        nodes {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            path
          }
        }
      }
    }
  `);

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    date: post.frontmatter.date,
    description: post.frontmatter.description,
    path: post.frontmatter.path,
  }));
};

export default ThoughtData;
