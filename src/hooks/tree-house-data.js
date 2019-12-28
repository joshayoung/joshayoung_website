import { graphql, useStaticQuery } from 'gatsby';

const TreeHouseData = () => {
  const data = useStaticQuery(graphql`
    {
      allTreehouseJson {
        nodes {
          title
          url
          display
        }
      }
    }
  `);

  return data.allTreehouseJson.nodes.map(data => ({
    id: data.id,
    title: data.title,
    url: data.url,
    date: data.url
  }));
};

export default TreeHouseData;