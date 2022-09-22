import { Resolvers } from "@koremo/graphql-resolvers";
import Query from "./queryResolvers/Query";
import Mutation from "./mutationResolvers/Mutation";

const resolvers: Resolvers = {
  Query,
  Mutation,
};

export default resolvers;
