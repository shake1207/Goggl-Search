import React from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-us-east-1.graphcms.com/v2/ckt2yw0q20r4t01xu7vd720qy/master',
  cache: new InMemoryCache(),
});

export default client;
