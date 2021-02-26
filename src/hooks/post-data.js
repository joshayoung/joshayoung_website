import { graphql, useStaticQuery } from "gatsby";

const PostData = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(sort: { order: DESC, fields: frontmatter___date }, limit: 3) {
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

export default PostData;
