import React from "react";
import DefinitionData from "../hooks/definition-data";

export default () => {
  const definitions = DefinitionData();

  return (
    <>
      {definitions.map(definition => (
        <dl key={definition.id}>
          <dt>{definition.word}</dt>
          <dd>
            {definition.definition}
          </dd>
          {definition.link !== '' && definition.link !== null ?
            <a target="_blank" rel="noopener noreferrer" href={definition.link}>
              (resource)
          </a>
            :
            ''
          }
        </dl>
      ))}
    </>
  );
};
