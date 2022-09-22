import { Resolvers } from "@koremo/graphql-resolvers";
import Query from "./queryResolvers/Query";
import Mutation from "./mutationResolvers/Mutation";
import DateScalar from "./DateScalar";

const resolvers: Resolvers = {
  Query,
  Mutation,
  Date: DateScalar,
};

export default resolvers;
