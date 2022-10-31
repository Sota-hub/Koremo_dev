import { MutationResolvers } from "@koremo/graphql-resolvers";
import { AuthenticationError, ApolloError } from "apollo-server-express";
import { Product } from "@koremo/entities";
import drive from "../../drive";

const deleteProduct: MutationResolvers["deleteProduct"] = async (
  _,
  args,
  context
) => {
  const user = context.user;
  if (!user) {
    throw new AuthenticationError("Authentication Error");
  }

  const { productId } = args;

  const product = await Product.findOneBy({
    id: productId,
  });
  if (!product) {
    throw new ApolloError("Product not found");
  }

  try {
    const id = product.id;
    await drive.files.delete({
      fileId: product.productImageId,
    });
    await product.remove();
    return id;
  } catch (e) {
    const error = e as Error;
    throw new ApolloError(error.message);
  }
};

export default deleteProduct;
