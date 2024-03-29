// Put togerther all the query resolvers(name as Query to match with Query type from graphql-resolvers)
import { QueryResolvers } from "@koremo/graphql-resolvers";
import user from "./user";
import searchedUser from "./searchedUser";
import friends from "./friends";
import pending from "./pending";
import product from "./product";
import products from "./products";
import friendsAndProductsLength from "./friendsAndProductsLength";

const Query: QueryResolvers = {
  user,
  searchedUser,
  friends,
  pending,
  product,
  products,
  friendsAndProductsLength,
};

export default Query;
