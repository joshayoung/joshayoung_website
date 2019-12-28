import React from "react";
import PodcastRecommendedData from "../hooks/podcast-recommend-data";

export default () => {
  const podcastRecommendedData = PodcastRecommendedData();

  return (
    <ul>
      {podcastRecommendedData.map(podcast => (
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