import { MutationResolvers } from "@koremo/graphql-resolvers";
import { AuthenticationError, ApolloError } from "apollo-server-express";
import { Product } from "@koremo/entities";
import { ProductStatus } from "@koremo/enums";

const checkProduct: MutationResolvers["checkProduct"] = async (
  _,
  args,
  context
) => {
  const user = context.user;
  if (!user) {
    throw new AuthenticationError("Authentication Error");
  }

  const product = await Product.findOneBy({
    id: args.productId,
  });

  if (!product) {
    throw new ApolloError("Product not found");
  }

  product.status = ProductStatus.Bought;

  try {
    await product.save();
    return product;
  } catch (e) {
    const error = e as Error;
    throw new ApolloError(error.message);
  }
};

export default checkProduct;
