import { graphql, useStaticQuery } from "gatsby";

const ResourceData = () => {
  const data = useStaticQuery(graphql`
    {
      allResourcesJson(sort: {order: ASC, fields: title}) {
        nodes {
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
    title: data.title,
    class: data.class,
    data: data.data,
  }));
};

export default ResourceData;
