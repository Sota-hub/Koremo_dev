// Put togerther all the query resolvers(name as Query to match with Query type from graphql-resolvers)
import { QueryResolvers } from "@koremo/graphql-resolvers";
import user from "./user";
import searchedUser from "./searchedUser";
import friends from "./friends";
import pending from "./pending";

const Query: QueryResolvers = {
  user,
  searchedUser,
  friends,
  pending,
};

export default Query;
