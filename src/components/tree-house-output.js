import PropTypes from "prop-types";
import React from "react";
import ListTreehouse from "../hooks/list-treehouse";

export default () => {
  const treehouse = ListTreehouse();

  return (
    <ul>
      <>
        {treehouse.map(treehouse => (
          <li><a href={treehouse.url}>{treehouse.title}</a></li>
        ))}
      </>
    </ul>
  );
};
