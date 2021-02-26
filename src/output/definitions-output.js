import React from "react";
import DefinitionData from "../hooks/definition-data";

export default () => {
  const definitions = DefinitionData();

  return (
    <dl>
      {definitions.map(definition => (
        <div key={definition.word}>
          <dt>{definition.word}</dt>
          <dd>
            {definition.definition}
            {definition.link !== "" && definition.link !== null ? (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={definition.link}
              >
                (resource)
              </a>
            ) : (
              ""
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
};
