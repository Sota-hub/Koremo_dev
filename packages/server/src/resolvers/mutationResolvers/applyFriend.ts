import { MutationResolvers } from "@koremo/graphql-resolvers";
import { AuthenticationError, ApolloError } from "apollo-server-express";
import { Friend } from "@koremo/entities";
import { FriendStatus } from "@koremo/enums";

const applyFriend: MutationResolvers["applyFriend"] = async (
  _,
  args,
  context
) => {
  const user = context.user;
  if (!user) {
    throw new AuthenticationError("Authentication Error");
  }

  const { friendId } = args;
  const friend = await Friend.findOne({
    where: [
      { userId: user.id, friendId: friendId },
      { userId: friendId, friendId: user.id },
    ],
  });
  if (friend) {
    throw new ApolloError("You have already sent/received the friend request");
  }

  const newFriend = new Friend();
  newFriend.userId = user.id;
  newFriend.friendId = friendId;
  newFriend.status = FriendStatus.Pending;

  try {
    await newFriend.save();
    return {
      id: newFriend.id,
      userId: newFriend.userId,
      friendId: newFriend.friendId,
      status: newFriend.status,
    };
  } catch (e) {
    const error = e as Error;
    throw new ApolloError(error.message);
  }
};

export default applyFriend;
