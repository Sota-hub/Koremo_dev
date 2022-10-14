import { QueryResolvers } from "@koremo/graphql-resolvers";
import { AuthenticationError } from "apollo-server-express";

const pending: QueryResolvers["pending"] = async (_, __, context) => {
  const user = context.user;

  if (!user) {
    throw new AuthenticationError("Authentication Error");
  }

  return [
    {
      id: user.id,
      name: user.name,
      profileImageId: user.profileImageId,
    },
  ];
};

export default pending;
