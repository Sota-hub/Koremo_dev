import { QueryResolvers /*Friend*/ } from "@koremo/graphql-resolvers";
// import { User } from "@koremo/entities";
// import { In } from "typeorm";

const friends: QueryResolvers["friends"] = async (/*_, args, context*/) => {
  // const { userId } = args;

  // const a = Friend.find({
  //   where: {
  //     userId: "1", // ここはログインしてるユーザーのidが入る
  //     status: 1
  //   }
  // });
  // const b = a.map(aa => aa.friendId);

  // const users = await User.find({
  //   //本当は where: { id: In([b]) }
  //   where: { id: In([1, 2]) },
  //   order: { lastAccessedAt: "DESC" },
  //   // skip: 0, 使うかも
  //   // take: 10
  // });

  // const friends_: Friend[] = users.map((user) => {
  //   // return {
  //   //   id: user.id,
  //   //   name: user.name,
  //   //   profileImageId: user.profileImageId,
  //   //   lastAccessedAt: user.lastAccessedAt,
  //   // };
  // });

  return [];
};

export default friends;
