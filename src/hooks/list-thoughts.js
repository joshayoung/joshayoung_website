import { graphql, useStaticQuery } from 'gatsby';

const listThoughts = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx {
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
  `)

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    date: post.frontmatter.date,
    description: post.frontmatter.description,
    path: post.frontmatter.path
  }));
};

export default listThoughts;