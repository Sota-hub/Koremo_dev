import { ApolloServer } from "apollo-server-express";
import express from "express";
import session from "express-session";
import typeDefs from "@koremo/graphql";
import resolvers from "./resolvers/index";
import dotenv from "dotenv";
import dataSource from "./_dataSource";
import passport from "./passportConfig";
import { buildContext } from "graphql-passport";

dotenv.config();

const secret = process.env.SESSION_SECRET as string;
const port = process.env.SERVER_PORT;
const isProduction = process.env.MODE === "production";

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
      cookie: {
        httpOnly: true,
        secure: isProduction,
        maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
      },
    })
  );

  app.use("/graphql", (req, _, next) => {
    console.log(req.session);

    console.log("session", req.session);
    return next();
  });

  // initialize passport and deserialize session
  app.use(passport.initialize());
  app.use(passport.session());

  // establish the apollo server
  const server = new ApolloServer({
    typeDefs: await typeDefs,
    resolvers,
    context: ({ req, res }) => buildContext({ req, res }),
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
