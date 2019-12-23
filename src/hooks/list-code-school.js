import { graphql, useStaticQuery } from 'gatsby';

const ListCodeSchool = () => {
  const data = useStaticQuery(graphql`
  {
    allCodeschoolsJson {
      nodes {
        id
        title
        url
      }
    }
  }
  `);

  return data.allCodeschoolsJson.nodes.map(data => ({
    id: data.id,
    title: data.title,
    url: data.url,
    date: data.url
  }));
};

export default ListCodeSchool;