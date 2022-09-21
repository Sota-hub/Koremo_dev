import React, { useState } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { User } from "@koremo/graphql-client";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import "../styles/normalize.css";
import "../styles/global.css";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({ uri: process.env.NEXT_PUBLIC_SERVER_URL }),
});

const App = ({ Component, pageProps, router }: AppProps) => {
  const [currentUser /*setCurrentUser*/] = useState<User | null>(null);

  //setCurrentUser(auth mutation) // localStrategyの場合cookieのセッションを確認, googleStrategyの場合は
  // if (mutation.loading) return <p>loading<p>
  // if (!mutation.data) router.replace("localhost:3000/login")

  return (
    <ApolloProvider client={client}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageProps.title}</title>
      </Head>
      <Component
        {...pageProps}
        router={router}
        currentUser={currentUser}
      ></Component>
    </ApolloProvider>
  );
};

export default App;
