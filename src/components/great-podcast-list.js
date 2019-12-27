import React from "react";
import PodcastEpisodes from "../hooks/podcast-episodes";

export default () => {
  const podcastEpisodes = PodcastEpisodes();

  return (
    <ul aria-labelledby='podcast_episodes' aria-describedby='podcasts_episodes_description'>
      {podcastEpisodes.map(post => (
        <div key={post.id}>
          {
            post.display === true ?
              <li><a href={post.url}>{post.title}</a></li>
              :
              ''
          }
        </div>
      ))}
    </ul>
  );
};