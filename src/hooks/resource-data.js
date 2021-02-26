import { graphql, useStaticQuery } from "gatsby";

const ResourceData = () => {
  const data = useStaticQuery(graphql`
    {
      allResourcesJson {
        nodes {
          id
          title
          class
          data {
            title
            display
            url
          }
        }
      }
    }
  `);

  return data.allResourcesJson.nodes.map(data => ({
    id: data.id,
    title: data.title,
    class: data.class,
    data: data.data,
  }));
};

export default ResourceData;
