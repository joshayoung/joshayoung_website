import { graphql, useStaticQuery } from "gatsby";

const CodeSchoolData = () => {
  const data = useStaticQuery(graphql`
    {
      allCodeschoolJson {
        nodes {
          id
          title
          url
        }
      }
    }
  `);

  return data.allCodeschoolJson.nodes.map(data => ({
    id: data.id,
    title: data.title,
    url: data.url,
    date: data.url,
  }));
};

export default CodeSchoolData;
