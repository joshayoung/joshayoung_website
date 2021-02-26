import { graphql, useStaticQuery } from "gatsby";

const PodcastRecommendedData = () => {
  const data = useStaticQuery(graphql`
    {
      allPodcastsRecommendedJson {
        nodes {
          id
          title
          url
          display
        }
      }
    }
  `);

  return data.allPodcastsRecommendedJson.nodes.map(data => ({
    id: data.id,
    title: data.title,
    url: data.url,
    display: data.display,
  }));
};

export default PodcastRecommendedData;
