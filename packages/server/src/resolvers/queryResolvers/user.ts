import { QueryResolvers } from "@koremo/graphql-resolvers";

const user: QueryResolvers["user"] = async (_, __, context) => {
  const user = context.user;
  console.log("user", user);

  return {
    id: "1",
    name: "Aaaa",
    profileImageId: "afdasf",
  };
};

export default user;
