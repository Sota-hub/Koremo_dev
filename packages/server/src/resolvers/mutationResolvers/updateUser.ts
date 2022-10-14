import { MutationResolvers } from "@koremo/graphql-resolvers";
import { AuthenticationError } from "apollo-server-express";

const updateUser: MutationResolvers["updateUser"] = async (_, __, context) => {
  const user = context.user;

  if (!user) {
    throw new AuthenticationError("Authentication Error");
  }

  return {
    id: "1",
    name: "user",
    profileImageId: "22222",
  };
};

export default updateUser;
