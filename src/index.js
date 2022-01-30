import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './utils/apolloClient'

// import { onError } from 'apollo-link-error';
// import { ApolloLink } from 'apollo-link';
// import { ApolloClient } from '@apollo/client';

// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors) {
//     console.log('graphQLErrors', graphQLErrors);
//   }
//   if (networkError) {
//     console.log('networkError', networkError);
//   }
// });

// const httpLink = createHttpLink({
//   uri: 'http://localhost:1337/graphql',
// });

// const link = ApolloLink.from([errorLink, httpLink]);

// export const client = new ApolloClient({ link });

//We used onError to catch GraphQL and Network errors and show them to console, and we are using the GraphQL endpoint for Strapi http://localhost:1337/graphql.

ReactDOM.render(
  <ApolloProvider  client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
