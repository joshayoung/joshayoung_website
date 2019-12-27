import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ListDefinitions from "../hooks/list-definitions";

export default () => {
  const definitions = ListDefinitions();
  return (
    <Layout>
      <SEO title="Definitions" />
      <h1>Programming Definitions</h1>
      {definitions.map(definition => (
        <dl key={definition.id}>
          <dt>{definition.word}</dt>
          <dd>
            {definition.definition}
          </dd>
          {definition.link !== '' && definition.link !== null ?
            <a target="_blank" href={definition.link}>
              (resource)
          </a>
            :
            ''
          }
        </dl>
      ))}
    </Layout>
  );
};