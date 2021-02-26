import React from "react";
import ResourceData from "../hooks/resource-data";
import AnchorList from "../components/anchor-list";

export default () => {
  const resources = ResourceData();

  return (
    <AnchorList>
      {resources.map(resource => (
        <li key={resource.id}>
          <a href={"#" + resource.class}>{resource.title}</a>
        </li>
      ))}
    </AnchorList>
  );
};
