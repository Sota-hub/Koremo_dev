import { QueryResolvers } from "@koremo/graphql-resolvers";
import { AuthenticationError } from "apollo-server-express";
import { User, Friend } from "@koremo/entities";
import { FriendStatus } from "@koremo/enums";
import { In } from "typeorm";

const pending: QueryResolvers["pending"] = async (_, __, context) => {
  const user = context.user;
  if (!user) {
    throw new AuthenticationError("Authentication Error");
  }

  const pending = await Friend.findBy({
    userId: user.id,
    status: FriendStatus.Pending,
  });
  const friendIds = pending.map((pend) => {
    return pend.friendId;
  });

  const pendingFriends = await User.find({
    where: {
      id: In(friendIds),
    },
    order: {
      lastAccessedAt: "DESC",
    },
  });

  return pendingFriends.map((friend) => {
    return {
      id: friend.id,
      name: friend.name,
      profileImageId: friend.profileImageId,
      lastAccessedAt: friend.lastAccessedAt,
    };
  });
};

export default pending;
