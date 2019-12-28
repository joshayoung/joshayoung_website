import React from "react";

export default ({ podcast }) => {
  return (
    <div key={podcast.id}>
      {
        podcast.display === true ?
          <li><a href={podcast.url}>{podcast.title}</a></li>
          :
          ''
      }
    </div>
  );
};
