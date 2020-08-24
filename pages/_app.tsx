import '../styles/index.css'
//adding global css.
import { ApolloProvider } from '@apollo/react-hooks';
import { createApolloClient } from '../api/client';

export default function MyApp({ Component, pageProps }) {
  const client = createApolloClient();
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
