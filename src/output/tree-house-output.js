import React from "react";
import TreeHouseData from "../hooks/tree-house-data";

export default () => {
  const treehouses = TreeHouseData();

  return (
    <ul>
      {treehouses.map(treehouse => (
        <li key={treehouse.url}><a href={treehouse.url}>{treehouse.title}</a></li>
      ))}
    </ul>
  );
};
