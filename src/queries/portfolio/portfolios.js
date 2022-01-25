import gql from "graphql-tag";

const PORTFOLIOS_QUERY = gql`
  query Portfolios {
    portfolios(sort: "updatedAt:desc") {
      data {
        id
        attributes {
          publishedAt
          portfolioLink
          portfolioTitle
          portfolioDescription
          updatedAt
          portfolioImg {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default PORTFOLIOS_QUERY;
