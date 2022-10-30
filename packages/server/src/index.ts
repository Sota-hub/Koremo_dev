import { ApolloServer } from "apollo-server-express";
import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import passport from "passport";
import dotenv from "dotenv";
import cors from "cors";
import dataSource from "./data-source";
import typeDefs from "@koremo/graphql";
import resolvers from "./resolvers/index";
import routers from "./routers";
import "./passport-strategy.mw";

dotenv.config();

const port = process.env.SERVER_PORT;
const frontendUrl = process.env.FRONTEND_URL;
const secret = String(process.env.SESSION_SECRET);
const isProduction = process.env.MODE === "production";
const corsSetting = { origin: frontendUrl, credentials: true };

(async () => {
  // Establish the connection
  await dataSource
    .initialize()
    .then(() => console.log("Connection Succeeded!"))
    .catch((e) => console.error("Connection Failed: ", e));

  // Build apollo server
  const server = new ApolloServer({
    typeDefs: await typeDefs,
    resolvers,
    context: ({ req }) => ({
      user: req.user,
    }),
    csrfPrevention: true,
    cache: "bounded",
  });
  await server.start();

  // Build express server
  const app = express();
  app.use(
    session({
      secret,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: isProduction,
        maxAge: 1000 * 60 * 60 * 24 * 7,
      },
    })
  );
  app.use(cors(corsSetting));
  app.use(bodyParser.json({ limit: "1.5mb" }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(routers);
  server.applyMiddleware({ app, cors: corsSetting });

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
})();
