// Put together all the query mutations (name as Mutation to match with Mutation type from graphql-resolvers)
import { MutationResolvers } from "@koremo/graphql-resolvers";
import localSignup from "./localSignup";

const Mutation: MutationResolvers = {
  localSignup,
};

export default Mutation;
