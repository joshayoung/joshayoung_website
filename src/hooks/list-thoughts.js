import { graphql, useStaticQuery } from 'gatsby';

const listThoughts = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx {
        nodes {
          frontmatter {
            title
            date
            path
          }
        }
      }
    }
  `)

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    date: post.frontmatter.date,
    path: post.frontmatter.path
  }));
};

export default listThoughts;