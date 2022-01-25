import gql from 'graphql-tag';

const ARTICLES_QUERY = gql`
  query Articles {
    articles(sort: "updatedAt:desc") {
      data {
        id
        attributes {
          publishedAt
          articleTitle
          articleLink
        }
      }
    }
  }
`;

export default ARTICLES_QUERY;
