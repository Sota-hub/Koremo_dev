import { MutationResolvers, User } from "@koremo/graphql-resolvers";

const localLogin: MutationResolvers["localLogin"] = (_, args) => {
  console.log(args.input);
  const user: User = {
    id: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "aaa",
    email: "test@test.com",
    profileImageUrl: null,
    lastAccessedAt: new Date(),
  };
  return user;
};

export default localLogin;
