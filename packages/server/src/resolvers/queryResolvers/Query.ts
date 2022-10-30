// Put togerther all the query resolvers(name as Query to match with Query type from graphql-resolvers)
import { QueryResolvers } from "@koremo/graphql-resolvers";
import user from "./user";
import searchedUser from "./searchedUser";
import friends from "./friends";
import pending from "./pending";
import product from "./product";

const Query: QueryResolvers = {
  user,
  searchedUser,
  friends,
  pending,
  product,
};

export default Query;
