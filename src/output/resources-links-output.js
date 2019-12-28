import React from "react";
import ResourceData from "../hooks/resource-data";

export default () => {
  const resources = ResourceData()

  return (
    <ul>
      {resources.map(resource => (
        <li key={resource.id}>
          <a href={"#" + resource.class}>
            {resource.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
