import { QueryResolvers } from "@koremo/graphql-resolvers";
import { AuthenticationError, ApolloError } from "apollo-server-express";
import { Product } from "@koremo/entities";

const products: QueryResolvers["products"] = async (_, args, context) => {
  const user = context.user;
  if (!user) {
    throw new AuthenticationError("Authentication Error");
  }

  const products = await Product.find({
    where: {
      ownerId: args.userId,
    },
    order: {
      status: "ASC",
      updatedAt: "DESC",
    },
  });

  if (!products) {
    throw new ApolloError("Products not found");
  }

  return products;
};

export default products;
