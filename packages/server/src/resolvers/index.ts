import { Resolvers } from "@koremo/graphql-resolvers";
import Query from "./queryResolvers/Query";
// import Mutation from "./Mutation";

const resolvers: Resolvers = {
  Query,
  // Mutation,
};

export default resolvers;
