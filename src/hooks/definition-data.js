import { graphql, useStaticQuery } from 'gatsby';

const DefinitionData = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allDefinitionsJson {
      nodes {
        id
        link
        word
        definition
      }
    }
  }
  `);

  return data.allDefinitionsJson.nodes.map(data => ({
    id: data.id,
    link: data.link,
    word: data.word,
    definition: data.definition
  }));
};

export default DefinitionData;