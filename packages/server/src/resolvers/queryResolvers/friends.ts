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

  const friends = await Friend.find({
    where: [
      { userId: user.id, status: FriendStatus.Approved },
      { friendId: user.id, status: FriendStatus.Approved },
    ],
  });

  console.log(friends);

  const ids = friends.map((friend) => {
    if (friend.userId === user.id) {
      return friend.friendId;
    } else {
      return friend.userId;
    }
  });

  const approvedFriends = await User.find({
    where: {
      id: In(ids),
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
