import { MutationResolvers } from "@koremo/graphql-resolvers";
import { AuthenticationError, ApolloError } from "apollo-server-express";
import { Product } from "@koremo/entities";
import drive from "../../drive";

const updateProduct: MutationResolvers["updateProduct"] = async (
  _,
  args,
  context
) => {
  const user = context.user;
  if (!user) {
    throw new AuthenticationError("Authentication Error");
  }

  const { id, productImageId, productName, shopName, price, supplement } =
    args.input;
  const product = await Product.findOneBy({
    id,
  });
  if (!product) {
    throw new ApolloError("Product not found");
  }

  product.updatedAt = new Date();
  product.productName = productName;
  product.shopName = shopName;
  product.price = price;
  if (supplement) {
    product.supplement = supplement;
  }

  try {
    if (productImageId && product.productImageId !== productImageId) {
      await drive.files.delete({
        fileId: product.productImageId,
      });
      product.productImageId = productImageId;
    }
    await product.save();
    return product;
  } catch (e) {
    const error = e as Error;
    throw new ApolloError(error.message);
  }
};

export default updateProduct;
