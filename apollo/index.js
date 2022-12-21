import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

export const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_KEY,
    cache: new InMemoryCache(),
});