import { MutationResolvers } from "@koremo/graphql-resolvers";
import { AuthenticationError, ApolloError } from "apollo-server-express";
import { Product } from "@koremo/entities";
import { ProductStatus } from "@koremo/enums";

const createProduct: MutationResolvers["createProduct"] = async (
  _,
  args,
  context
) => {
  const user = context.user;
  if (!user) {
    throw new AuthenticationError("Authentication Error");
  }

  const { ownerId, productImageId, productName, shopName, price, supplement } =
    args.input;
  const product = new Product();
  product.ownerId = ownerId;
  product.productName = productName;
  product.shopName = shopName;
  product.price = price;
  product.status = ProductStatus.InList;
  if (productImageId) {
    product.productImageId = productImageId;
  }
  if (supplement) {
    product.supplement = supplement;
  }

  try {
    await product.save();
    return product;
  } catch (e) {
    const error = e as Error;
    throw new ApolloError(error.message);
  }
};

export default createProduct;
