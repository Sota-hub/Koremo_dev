import { ApolloServer } from "apollo-server-express";
import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import passport from "passport";
import dotenv from "dotenv";
import dataSource from "./data-source";
import typeDefs from "@koremo/graphql";
import resolvers from "./resolvers/index";
import routers from "./routers";
import "./passport-strategy.mw";

dotenv.config();

const port = process.env.SERVER_PORT;
const secret = String(process.env.SESSION_SECRET);
const isProduction = process.env.MODE === "production";

(async () => {
  await dataSource
    .initialize()
    .then(() => console.log("Connection Succeeded!"))
    .catch((e) => console.error("Connection Failed: ", e));

  const app = express();

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

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.get("info", (req) => {
    console.log("May run deserialize user before");
    console.log(req.user);
  });
  app.use(routers);

  const server = new ApolloServer({
    typeDefs: await typeDefs,
    resolvers,
    // context: () => {},
    csrfPrevention: true,
    cache: "bounded",
  });

  await server.start();

  server.applyMiddleware({ app });

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
})();
