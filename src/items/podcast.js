import React from "react";

export default ({ podcast }) => {
  const data = function(podcast) {
    if (podcast.display === true) {
      return (
        <li>
          <a href={podcast.url}>{podcast.title}</a>
        </li>
      );
    }
  };

  return <ul>{data(podcast)}</ul>;
};
