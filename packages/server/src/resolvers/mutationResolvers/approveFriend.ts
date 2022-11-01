import { MutationResolvers } from "@koremo/graphql-resolvers";
import { AuthenticationError, ApolloError } from "apollo-server-express";
import { Friend } from "@koremo/entities";
import { FriendStatus } from "@koremo/enums";

const approveFriend: MutationResolvers["approveFriend"] = async (
  _,
  args,
  context
) => {
  const user = context.user;
  if (!user) {
    throw new AuthenticationError("Authentication Error");
  }

  const { userId } = args;
  const friend = await Friend.findOneBy({
    userId: userId,
    friendId: user.id,
    status: FriendStatus.Pending,
  });
  if (!friend) {
    throw new ApolloError("Could not find the pending friend");
  }

  friend.status = FriendStatus.Approved;
  try {
    await friend.save();
    return {
      id: friend.id,
      userId: friend.userId,
      friendId: friend.friendId,
      status: friend.status,
    };
  } catch (e) {
    const error = e as Error;
    throw new ApolloError(error.message);
  }
};

export default approveFriend;
