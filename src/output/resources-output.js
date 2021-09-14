import React from "react";
import ResourceData from "../hooks/resource-data";
import Resource from "../items/resource";
import { css } from "@emotion/react";

export default () => {
  const resources = ResourceData();

  return (
    <ul
      css={css`
        margin-left: 0;
      `}
    >
      {resources.map(resource => (
        <Resource
          key={resource.id}
          klass={resource.class}
          title={resource.title}
          post={resource.data}
        />
      ))}
    </ul>
  );
};
