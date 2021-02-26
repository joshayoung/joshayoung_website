import { graphql, useStaticQuery } from "gatsby";

const PodcastData = () => {
  const data = useStaticQuery(graphql`
    {
      allPodcastsJson {
        nodes {
          id
          title
          url
          display
        }
      }
    }
  `);

  return data.allPodcastsJson.nodes.map(data => ({
    id: data.id,
    title: data.title,
    url: data.url,
    display: data.display,
  }));
};

export default PodcastData;
