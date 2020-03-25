import React from "react";
import PodcastData from "../hooks/podcast-data";
import Podcast from "../items/podcast";

export default () => {
  const podcasts = PodcastData();

  return (
    <ul>
      {podcasts.map(podcast => (
        <Podcast key={podcast.id} podcast={podcast} />
      ))}
    </ul>
  );
};
