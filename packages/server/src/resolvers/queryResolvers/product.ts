import { QueryResolvers } from "@koremo/graphql-resolvers";
import { AuthenticationError, ApolloError } from "apollo-server-express";
import { Product } from "@koremo/entities";

const product: QueryResolvers["product"] = async (_, args, context) => {
  const user = context.user;
  if (!user) {
    throw new AuthenticationError("Authentication Error");
  }

  const product = await Product.findOneBy({
    id: args.id,
  });

  if (!product) {
    throw new ApolloError("Product not found");
  }

  return product;
};

export default product;
