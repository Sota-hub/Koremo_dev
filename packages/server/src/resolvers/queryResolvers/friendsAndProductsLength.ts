import {
  QueryResolvers,
  FriendsAndProductsLength,
} from "@koremo/graphql-resolvers";
import { AuthenticationError } from "apollo-server-express";
import { Friend, User, Product } from "@koremo/entities";
import { FriendStatus } from "@koremo/enums";

const friendsAndProductsLength: QueryResolvers["friendsAndProductsLength"] =
  async (_, __, context) => {
    const user = context.user;
    console.log("current user = ", user);
    
    if (!user) {
      throw new AuthenticationError("Authentication Error");
    }

    const friendIds = (
      await Friend.find({
        where: [
          { userId: user.id, status: FriendStatus.Approved },
          { friendId: user.id, status: FriendStatus.Approved },
        ],
      })
    ).map((friend) => {
      if (friend.userId === user.id) {
        return friend.friendId;
      } else {
        return friend.userId;
      }
    });

    const findUserAndProduct = async (id: string) => {
      const friend = await User.findOneBy({ id });
      const products = await Product.findBy({ ownerId: id });
      if (!friend) {
        return;
      } else {
        return {
          id: friend.id,
          name: friend.name,
          profileImageId: friend.profileImageId,
          lastAccessedAt: friend.lastAccessedAt,
          productsLength: products.length,
        };
      }
    };

    const friendInfoAndProductLengthArray: FriendsAndProductsLength[] = [];

    (
      await Promise.all(
        friendIds.map((id) => {
          return findUserAndProduct(id);
        })
      )
    ).forEach((item) => {
      if (item !== undefined) {
        friendInfoAndProductLengthArray.push(item);
      }
    });

    return friendInfoAndProductLengthArray.sort(
      (a, b) => Number(b.lastAccessedAt) - Number(a.lastAccessedAt)
    );
  };

export default friendsAndProductsLength;
