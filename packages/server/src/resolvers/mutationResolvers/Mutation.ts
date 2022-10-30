// Put together all the query mutations (name as Mutation to match with Mutation type from graphql-resolvers)
import { MutationResolvers } from "@koremo/graphql-resolvers";
import updateUser from "./updateUser";
import applyFriend from "./applyFriend";
import approveFriend from "./approveFriend";
import uploadImage from "./uploadImage";
import createProduct from "./createProduct";

const Mutation: MutationResolvers = {
  updateUser,
  applyFriend,
  approveFriend,
  uploadImage,
  createProduct,
};

export default Mutation;
