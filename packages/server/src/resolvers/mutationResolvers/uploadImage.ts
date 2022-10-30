import { MutationResolvers } from "@koremo/graphql-resolvers";
import { AuthenticationError, ApolloError } from "apollo-server-express";
import { Readable } from "stream";
import drive from "../../drive";

const uploadImage: MutationResolvers["uploadImage"] = async (
  _,
  args,
  context
) => {
  const user = context.user;
  if (!user) {
    throw new AuthenticationError("Authentication Error");
  }

  const { fileBody, fileName, fileType } = args.input;
  try {
    const response = await drive.files.create({
      requestBody: {
        name: fileName,
        mimeType: fileType,
        parents: ["1vVgFe8w3o8raj7qLMMUTAIE80rTPl4Er"],
      },
      media: {
        mimeType: fileType,
        body: Readable.from(Buffer.from(fileBody, "base64")),
      },
    });
    return {
      imageId: response.data.id as string,
    };
  } catch (e) {
    const error = e as Error;
    throw new ApolloError(error.message);
  }
};

export default uploadImage;
