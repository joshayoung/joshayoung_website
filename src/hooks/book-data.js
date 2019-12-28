import { graphql, useStaticQuery } from 'gatsby';

const BookData = () => {
  const data = useStaticQuery(graphql`
  {
    allBooksCategorizedJson {
      nodes {
        hide_from_recommended
        id
        title
        data {
          author
          title
          url
          display
          short_title
          recommend
          truncated_authors
        }
      }
    }
  }
  `);

  return data.allBooksCategorizedJson.nodes.map(data => ({
    hide_list: data.hide_from_recommended,
    id: data.id,
    title: data.title,
    data: data.data
  }));
};

export default BookData;