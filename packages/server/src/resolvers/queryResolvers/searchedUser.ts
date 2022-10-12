import { QueryResolvers } from "@koremo/graphql-resolvers";
import { AuthenticationError } from "apollo-server-express";
import { User } from "@koremo/entities";

const searchedUser: QueryResolvers["searchedUser"] = async (
  _,
  args,
  context
) => {
  if (!context.user) {
    throw new AuthenticationError("Authentication Error");
  }

  const user = await User.findOneBy({
    id: args.id,
  });

  if (!user) {
    return null;
  }

  return {
    id: user.id,
    name: user.name,
    profileImageId: user.profileImageId,
  };
};

export default searchedUser;
