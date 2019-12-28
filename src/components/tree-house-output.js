import React from "react";
import TreeHouseData from "../hooks/tree-house-data";

export default () => {
  const treehouses = TreeHouseData();

  return (

    <ul>
      <li>est</li>
      {treehouses.map(treehouse => (
        <li><a href={treehouse.url}>{treehouse.title}</a></li>
      ))}
    </ul>
  );
};
