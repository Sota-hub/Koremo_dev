// Put togerther all the query resolvers(name as Query to match with Query type from graphql-resolvers)
import { QueryResolvers } from "@koremo/graphql-resolvers";
import friends from "./friends";

const Query: QueryResolvers = {
  friends,
};

export default Query;
