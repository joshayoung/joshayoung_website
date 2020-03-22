import React from "react";
import PodcastRecommendedData from "../hooks/podcast-recommend-data";
import Podcast from "../items/podcast";

export default () => {
  const podcasts = PodcastRecommendedData();

  return (
    <ul>
      {podcasts.map(podcast => (
        <Podcast key={podcast.id} podcast={podcast} />
      ))}
    </ul>
  );
};