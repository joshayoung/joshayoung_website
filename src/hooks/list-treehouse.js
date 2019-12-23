import { graphql, useStaticQuery } from 'gatsby';

const listTreehouse = () => {
  const data = useStaticQuery(graphql`
    {
      allTreehousesJson {
        nodes {
          title
          url
          display
        }
      }
    }
  `);

  return data.allTreehousesJson.nodes.map(data => ({
    id: data.id,
    title: data.title,
    url: data.url,
    date: data.url
  }));
};

export default listTreehouse;