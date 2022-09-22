import { MutationResolvers, User } from "@koremo/graphql-resolvers";

const localSignup: MutationResolvers["localSignup"] = async (_, args) => {
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

export default localSignup;
