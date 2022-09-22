// Put together all the query mutations (name as Mutation to match with Mutation type from graphql-resolvers)
import { MutationResolvers } from "@koremo/graphql-resolvers";
import localSignup from "./localSignup";
import localLogin from "./localLogin";

const Mutation: MutationResolvers = {
  localSignup,
  localLogin
};

export default Mutation;
