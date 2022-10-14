import { QueryResolvers } from "@koremo/graphql-resolvers";
import { AuthenticationError } from "apollo-server-express";
import { User, Friend } from "@koremo/entities";
import { FriendStatus } from "@koremo/enums";
import { In } from "typeorm";

const friends: QueryResolvers["friends"] = async (_, __, context) => {
  const user = context.user;
  if (!user) {
    throw new AuthenticationError("Authentication Error");
  }

  const friends = await Friend.findBy({
    userId: user.id,
    status: FriendStatus.Approved,
  });
  const friendIds = friends.map((friend) => {
    return friend.friendId;
  });

  const approvedFriends = await User.find({
    where: {
      id: In(friendIds),
    },
    order: {
      lastAccessedAt: "DESC",
    },
  });

  return approvedFriends.map((friend) => {
    return {
      id: friend.id,
      name: friend.name,
      profileImageId: friend.profileImageId,
      lastAccessedAt: friend.lastAccessedAt,
    };
  });
};

export default friends;
