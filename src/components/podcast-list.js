import React from "react";
import PodcastData from "../hooks/podcast-data";

export default () => {
  const podcastData = PodcastData();

  return (
    <ul>
      {podcastData.map(podcast => (
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
