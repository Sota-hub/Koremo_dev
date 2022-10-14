import { MutationResolvers } from "@koremo/graphql-resolvers";
import { AuthenticationError } from "apollo-server-express";

const approveFriend: MutationResolvers["approveFriend"] = async (
  _,
  __,
  context
) => {
  const user = context.user;

  if (!user) {
    throw new AuthenticationError("Authentication Error");
  }

  return {
    id: "1",
    userId: "1",
    friendId: "2",
    status: 1,
  };
};

export default approveFriend;
