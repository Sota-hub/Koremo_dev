import { ApolloServer } from "apollo-server-express";
import express from "express";
import session from "express-session";
import typeDefs from "@koremo/graphql";
import resolvers from "./resolvers/index";
import dotenv from "dotenv";
import dataSource from "./DataSource";
import passport from "./passportConfig";
import apolloContext from "./apolloContext";

dotenv.config();

const secret = process.env.SESSION_SECRET as string;
const port = process.env.PORT;

(async () => {
  // connect to the database when this app is up
  await dataSource
    .initialize()
    .then(() => console.log("Connection Succeeded!"))
    .catch((err) => console.error("Connection Failed: ", err));

  // create app
  const app = express();

  // Issue a session
  app.use(
    session({
      secret,
      resave: false,
      saveUninitialized: false,
      // genid: (req) => uuid(); default session id is generated by uid-safe
      // cookie: { secure: true } TODO: enable in production mode
      // session is stored to server memory by default, so it's removed when the server is restarted
    })
  );

  // initialize passport and deserialize session
  app.use(passport.initialize());
  app.use(passport.session());

  // establish the apollo server
  const server = new ApolloServer({
    typeDefs: await typeDefs,
    resolvers,
    context: ({ req, res }) => {
      return apolloContext(req, res);
    },
    csrfPrevention: true,
    cache: "bounded",
  });

  // start the server
  await server.start();

  // apply middleware
  server.applyMiddleware({ app });

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
})();
