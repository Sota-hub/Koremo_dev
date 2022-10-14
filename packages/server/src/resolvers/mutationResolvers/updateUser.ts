import { MutationResolvers } from "@koremo/graphql-resolvers";
import { AuthenticationError, ApolloError } from "apollo-server-express";
import { User } from "@koremo/entities";

const updateUser: MutationResolvers["updateUser"] = async (
  _,
  args,
  context
) => {
  const user = context.user;
  if (!user) {
    throw new AuthenticationError("Authentication Error");
  }

  const foundUser = await User.findOneBy({
    id: user.id,
  });
  if (!foundUser) {
    throw new ApolloError("User not Found");
  }

  const { name, profileImageId } = args.input;
  foundUser.name = name;
  if (profileImageId) foundUser.profileImageId = profileImageId;

  try {
    await foundUser.save();
    return {
      id: foundUser.id,
      name: foundUser.name,
      profileImageId: foundUser.profileImageId,
    };
  } catch (e) {
    const error = e as Error;
    throw new ApolloError(error.message);
  }
};

export default updateUser;
