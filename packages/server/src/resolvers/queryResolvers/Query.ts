// Put togerther all the query resolvers(name as Query to match with Query type from graphql-resolvers)
import { QueryResolvers } from "@koremo/graphql-resolvers";
import user from "./user";
import searchedUser from "./searchedUser";
import friends from "./friends";

const Query: QueryResolvers = {
  user,
  searchedUser,
  friends,
};

export default Query;
