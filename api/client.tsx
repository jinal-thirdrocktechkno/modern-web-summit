import { ApolloClient, InMemoryCache } from '@apollo/client';

export const createApolloClient = () => {
  return new ApolloClient({
    uri: 'https://graphql.anilist.co',
    headers: {
      // ':authority': 'hasura.io',
      // ':method': 'POST',
      // ':path': '/learn/graphql',
      // ':scheme': 'https',
      'accept': '*/*',
      'Content-Type': 'application/json',
      // Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9FWTJSVGM1UlVOR05qSXhSRUV5TURJNFFUWXdNekZETWtReU1EQXdSVUV4UVVRM05EazFNQSJ9`
    },
    cache: new InMemoryCache()
  });
};