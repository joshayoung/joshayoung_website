import React from "react";
import ResourceData from "../hooks/resource-data";
import Resource from "../items/resource";

export default () => {
  const resources = ResourceData()

  return (
    <ul>
      {resources.map(resource => (
        <Resource key={resource.id} klass={resource.class} title={resource.title} post={resource.data} />
      ))}
    </ul>
  );
};
