import { graphql, useStaticQuery } from 'gatsby';

const PodcastEpisodes = () => {
  const data = useStaticQuery(graphql`
  {
    allPodcastsEpisodesJson {
      nodes {
        id
        title
        url
        display
      }
    }
  }
  `);

  return data.allPodcastsEpisodesJson.nodes.map(data => ({
    id: data.id,
    title: data.title,
    url: data.url,
    display: data.display
  }));
};

export default PodcastEpisodes;