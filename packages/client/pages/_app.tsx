import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import "../styles/normalize.css";
import "../styles/global.css";

const client = new ApolloClient({
  ssrMode: typeof window === "undefined",
  cache: new InMemoryCache(),
  link: createHttpLink({
    uri: `${process.env.NEXT_PUBLIC_SERVER_URL}/graphql`,
    credentials: "include",
  }),
});

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageProps.title}</title>
      </Head>
      <Component {...pageProps} router={router}></Component>
    </ApolloProvider>
  );
};

export default App;
