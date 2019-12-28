import React from "react";
import PodcastData from "../hooks/podcast-data";

export default () => {
  const podcasts = PodcastData();

  return (
    <ul>
      {podcasts.map(podcast => (
        <div key={podcast.id}>
          {
            podcast.display === true ?
              <li><a href={podcast.url}>{podcast.title}</a></li>
              :
              ''
          }
        </div>
      ))}
    </ul>
  );
};
