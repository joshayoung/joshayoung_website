import React from "react";
import Podcasts from "../hooks/podcasts";

export default () => {
  const podcasts = Podcasts();

  return (
    <ul aria-labelledby='recommended_podcasts' aria-describedby='recommended_podcasts_description'>
      {podcasts.map(post => (
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
